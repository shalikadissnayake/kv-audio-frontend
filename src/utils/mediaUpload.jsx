import { createClient } from '@supabase/supabase-js'

const anon_key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwenFhbmVtaWd4eWNqb2d4bnB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwNzY3NjMsImV4cCI6MjA1NTY1Mjc2M30.6Pzip4iZo_tEkhPxSZX5XtQg9bqwtYeNGiFnr7Ef0rU"
const supabase_url="https://ipzqanemigxycjogxnpx.supabase.co"
const supabase = createClient(supabase_url,anon_key)

export default function mediaUpload(file){

    return new Promise((resolve, reject)=>{
        if(file == null){
            reject("No file selected")
        }
        const timestamp= new Date().getTime();
        const fileName=timestamp+file.name;


    supabase.storage.from("images").upload(fileName,file, {
        cacheControl:'3600',
        upsert: false,
    }).then(()=>{

        const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;

        resolve(publicUrl);
    }).catch(()=>{
        reject("Error uploading file")
    })

    });
   
   

 }