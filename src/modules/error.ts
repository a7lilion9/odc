"use server";

import db from "./db";

export async function getErrorByServiceId(serviceId) {
  return await db.service.findUnique({
    where: { id: serviceId },
    include: { errors: true },
  });
}
