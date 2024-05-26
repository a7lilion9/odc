"use server";

import db from "./db";

export async function getAllTypes() {
  return await db.type.findMany({ include: { articles: true } });
}
