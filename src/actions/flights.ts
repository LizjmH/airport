'use server'

import { db } from '@/lib/db'

export async function createFlight(formData: FormData) {
    const departure_time = formData.get('departure_time') as string
    const arrive_time = formData.get('arrive_time') as string
    const pilot_id = formData.get('pilot_id') as string
    const from_id = formData.get('from_id') as string
    const to_id = formData.get('to_id') as string
    const airplane_id = formData.get('airplane_id') as string
    await db.flights.create({
        data: {
            departure_time: new Date(departure_time),
            arrive_time: new Date(arrive_time),
            airplane_id: Number(airplane_id),
            pilot_id: Number(pilot_id),
            from_id: Number(from_id),
            to_id: Number(to_id),
        },
    })
}
