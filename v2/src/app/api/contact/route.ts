import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, occasion, date, guests, message } = body || {};

    if (!name || !email || !occasion) {
      return NextResponse.json(
        { ok: false, error: 'Please provide your name, email and occasion.' },
        { status: 400 }
      );
    }

    console.log('[Velvet Bloom] New booking enquiry:', {
      name,
      email,
      phone,
      occasion,
      date,
      guests,
      message,
      at: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      message: `Thank you, ${String(name).split(' ')[0]}! Our team will reach out within 24 hours to craft your celebration.`,
    });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || 'Something went wrong.' },
      { status: 500 }
    );
  }
}
