import connectDB from "@/config/database";
import { NextApiResponse, NextApiRequest } from "next";
import Order from "@/models/order";
import { NextResponse } from "next/server";



export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const { id } = params;
    const {
      tags,
      customer,
      reasonfortransfer,
      foreigncurrency, 
      country, 
      sourceoffunds
      
    } = await request.json();
    await connectDB();
    await Order.findByIdAndUpdate(id, {
        tags,
        customer,
        reasonfortransfer,
        foreigncurrency, 
        country, 
        sourceoffunds,
    });
    return NextResponse.json({ message: "order created" }, { status: 200 });
  }
  
  export async function GET(
    request: NextApiRequest,
    { params }: { params: { id: string } }
  ) {
    const { id } = params;
    await connectDB();
    const order = await Order.findOne({ _id: id });
    return NextResponse.json({ order }, { status: 200 });
  }
  