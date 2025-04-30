'use server'

import { db } from '@/lib/db'

export async function createairplane(formData: FormData) {
    const code = formData.get('code') as string
    const base_id = formData.get('base_id') as string
    await db.airplane.create({
        data: {
            code,
            base_id: Number(base_id),
        },
    })
}
