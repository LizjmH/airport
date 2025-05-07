'use server'

import { db } from '@/lib/db'

export async function addcrew(formData: FormData) {
    const crew_id = formData.get('crew_id') as string
    const flight_id = formData.get('flight_id') as string
    await db.crew_Flights.create({
        data: {
            crew_id: Number(crew_id),
            flight_id: Number(flight_id),
        },
    })
}
