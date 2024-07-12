import OrderModel from "@/models/order";
import connectDB from "@/config/database";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const {  AMLstatus,tags,customer,reasonfortransfer,foreigncurrency, country, sourceoffunds} = await request.json();
    await connectDB();
    await OrderModel.create({ AMLstatus,tags,customer,reasonfortransfer, foreigncurrency,country,sourceoffunds});
    return NextResponse.json({ message: "order Created" }, { status: 201 });
  }

  export async function GET() {
    await connectDB();
    const orders = await OrderModel.find();
    return NextResponse.json({ orders });
  }