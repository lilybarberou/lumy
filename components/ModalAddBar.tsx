'use client';

import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import Button from './Button';
import { Input } from './ui/input';
import { useForm } from 'react-hook-form';
import { Label } from './ui/label';
import { useState } from 'react';

export default function ModalAddBar() {
    const [open, setOpen] = useState(false);
    const { register, handleSubmit, reset } = useForm<{ name: string; address: string }>();

    const onSubmit = handleSubmit((data) => {
        setOpen(false);
        reset();
    });

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Button>🙋‍♀️ Faire une demande</Button>
            </DialogTrigger>
            <DialogContent>
                <form onSubmit={onSubmit} className="p-4 flex flex-col gap-4">
                    <Label>Nom</Label>
                    <Input {...register('name', { required: true })} />
                    <Label>Adresse</Label>
                    <Input {...register('address', { required: true })} />
                    <Button>Ajouter</Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
