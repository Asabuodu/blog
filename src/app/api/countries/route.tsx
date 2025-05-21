// // pages/api/countries.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const response = await axios.get('https://ghoapi.azureedge.net/api/DIMENSION/COUNTRY/DimensionValues');
//     res.status(200).json(response.data);
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       console.error("WHO Country API Error:", error.message);
//     } else {
//       console.error("WHO Country API Error:", error);
//     }
//     res.status(500).json({ error: "Failed to fetch country data" });
//   }
// }





// src/app/api/countries/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get('https://ghoapi.azureedge.net/api/DIMENSION/COUNTRY/DimensionValues');
    return NextResponse.json(response.data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("WHO Country API Error:", error.message);
    } else {
      console.error("WHO Country API Error:", error);
    }
    return NextResponse.json(
      { error: "Failed to fetch country data" },
      { status: 500 }
    );
  }
}
