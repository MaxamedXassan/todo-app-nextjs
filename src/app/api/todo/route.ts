// import prisma from "@/prisma"
import prisma from "../../../../prisma";

import { NextResponse } from "next/server"


 export async function main() {
    try {
        await prisma.$connect();
    }catch(err) {
        return Error("Database Connection Unsuccessull")
    }
}



export const GET = async (req: Request, res: NextResponse) => {
    try {
      await main();
      const todos = await prisma.todo.findMany();
      return NextResponse.json({ message: "Success", todos }, { status: 200 });
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
  };
  

  export const POST = async (req: Request, res: NextResponse) => {
    try {
      const { title } = await req.json();
      await main();
      const customer = await prisma.todo.create({ data: { title } });
      return NextResponse.json({ message: "Success", customer }, { status: 201 });
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
  };
  