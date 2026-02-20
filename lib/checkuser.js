import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  try {
    // 1. First, check if user exists by Clerk ID
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    // 2. If not found by Clerk ID, check if the email already exists in your DB
    const userEmail = user.emailAddresses[0].emailAddress;
    const name = `${user.firstName} ${user.lastName}`;

    const existingUserByEmail = await db.user.findUnique({
      where: {
        email: userEmail,
      }
    });

    // 3. If email exists but Clerk ID didn't match, update their record with the new Clerk ID
    if (existingUserByEmail) {
      const updatedUser = await db.user.update({
        where: { email: userEmail },
        data: {
          clerkUserId: user.id,
          name: name,
          imageUrl: user.imageUrl,
        }
      });
      return updatedUser;
    }

    // 4. If neither exists, safely create a brand new user
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: userEmail,
      },
    });

    return newUser;

  } catch (error) {
    console.log(error.message);
  }
};