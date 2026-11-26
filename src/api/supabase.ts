import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseServiceKey);

export interface UpdateProductsRequestBody {
    products: unknown[];
    googleToken: string;
}

export interface GoogleTokenInfo {
    email?: string;
    [key: string]: unknown;
}

export interface ApiRequest {
    method?: string;
    body: UpdateProductsRequestBody;
}

export interface ApiResponse {
    status: (statusCode: number) => ApiResponse;
    json: (data: { success?: boolean; message?: string; error?: string }) => void;
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
    // 1. Only allow secure POST requests from your dashboard
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { products, googleToken } = req.body;

        // 2. Verify the business owner's Google Token on the backend
        const googleVerify = await fetch(
            `https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(googleToken)}`
        );
        const tokenInfo = (await googleVerify.json()) as GoogleTokenInfo;

        if (!googleVerify.ok || tokenInfo.email !== 'the_owner_email@gmail.com') {
            return res.status(401).json({ error: 'Unauthorized Google Account' });
        }

        // 3. Clear existing items and bulk insert the compiled JSON data
        await supabase.from('products').delete().neq('id', 0);
        const { error } = await supabase.from('products').insert(products);

        if (error) throw error;

        return res.status(200).json({ success: true, message: 'Inventory updated instantly!' });
    } catch (err) {
        const message = err instanceof Error ? err.message : 'An unknown error occurred';
        return res.status(500).json({ error: message });
    }
}
