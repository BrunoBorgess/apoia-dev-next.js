"use client";

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório"),
    message: z.string().min(1, "A menssagem é obrigatória"),
    price: z.enum(["15", "25", "35"], {
        required_error: "O valor é obrigatório",
    })
})

type formData = z.infer<typeof formSchema>

export function FormDonate(){
    
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            message: "",
            price: "15",
        },
    })


    function onSubmit(values: z.infer<typeof formSchema>){
        console.log(values)
    }

    
    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-5">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                            <Input 
                            placeholder="Digite seu nome..." 
                            {...field}
                            className="bg-white"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />

                <Button type="submit">Fazer doação</Button>

            </form>
        </Form>
    )
}