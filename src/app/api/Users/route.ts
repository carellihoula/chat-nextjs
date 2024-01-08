import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectDB } from "@/lib/db";

export async function POST(req: Request) {
  try {
    connectDB();
    const body = await req.json();
    const userData = body;

    if (!userData?.email || !userData?.password) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    const duplicate = await User.findOne({ email: userData.email })
      .lean()
      .exec();
    if (duplicate) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    userData.password = await bcrypt.hash(userData.password, 10);
    const user = await User.create(userData);

    // Supprimer ou masquer les informations sensibles avant de renvoyer l'utilisateur
    // Exemple : delete user.password;
    console.log("User created:", user);
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    const typedError = error as Error; // Typing the error as an instance of Error
    console.error(typedError.message);
    return NextResponse.json({ error: typedError.message }, { status: 500 });
  }
}
