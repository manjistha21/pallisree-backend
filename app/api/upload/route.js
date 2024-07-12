import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { parseFormData } from "@/utils/parseFormData"; // Utility to parse form data, assuming you have a utility function for this

// Middleware to enable CORS
export function middleware(request) {
  const response = NextResponse.next();

  // Set CORS headers
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight request
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: response.headers });
  }

  return response;
}

export const POST = async (req) => {
  try {
    const { fields, files } = await parseFormData(req);
    const file = files.file;

    if (!file) {
      return NextResponse.json({ error: "No files received." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name.replaceAll(" ", "_");
    const filePath = path.join(process.cwd(), "public/uploads/", filename);

    await writeFile(filePath, buffer);

    return NextResponse.json({ message: "Success", status: 200 });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ message: "Failed", status: 500 });
  }
};
