/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')

dotenv.config()
const db = new PrismaClient()

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

async function main() {
  user_names = ['Taylor','Luke','Noah','Jimmy','Joe','Bob','John','Jerry']
  new_users = []
  new_projects = []

  await asyncForEach(user_names, async (name) => {
    const existingProject = await db.project.findMany({ where: { name: name + "'s project" }})
    if (existingProject.length) {
      await db.project.delete({where: {id: existingProject[0].id}})
    }
    const existingUser = await db.user.findMany({ where: { email: name+'@gmail.com' }})
    if (existingUser.length) {
      await db.user.delete({where: {email: name + '@gmail.com'}})
    }
    for(var i=1;i<4;i++){
      const existingPost = await db.post.findMany({ where: { bodyText: name+"'s project body text "+i }})
      if (existingPost.length) {
        await db.post.delete({where: { id: existingPost[0].id }})
      }
    }
    new_projects.push(
      await db.project.create({
        data: {
          name: name+"'s project",
          user: {
            create: {
              email: name+'@gmail.com',
              name: name
            }
          },
          posts: {
            create: [
              {
                bodyText: name+"'s project body text 1",
              },
              {
                bodyText: name+"'s project body text 2"
              },
              {
                bodyText: name+"'s project body text 3"
              }
            ],
          }
        }
      })
    );
  });

  console.info('Finished seeding!');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })
