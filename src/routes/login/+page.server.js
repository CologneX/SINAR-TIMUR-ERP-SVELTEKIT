import { redirect, error } from "@sveltejs/kit";


export const actions = {
    login: async ({request, locals}) =>{
        const body = Object.fromEntries(await request.formData())
        try {
            await locals.pb.collection('users').authWithPassword(body.username, body.password);
        } 
        catch (err){
            console.log(err)
            throw error(500, 'Login error: ' + err);
        }
        throw redirect(303, '/dashboard');
    }
};