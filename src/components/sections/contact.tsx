
'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { Loader2, Send } from 'lucide-react';
import { sendContactForm, type ContactFormState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SOCIAL_LINKS, PROFILE_DATA } from '@/lib/data';
import { FadeIn } from '../ui/fade-in';
import { Separator } from '../ui/separator';

const initialState: ContactFormState = {
  message: '',
  status: 'idle',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Send Message
        </>
      )}
    </Button>
  );
}

export function ContactSection() {
  const { toast } = useToast();
  const [state, formAction] = useActionState(sendContactForm, initialState);

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: 'Message Sent!',
        description: state.message,
      });
    } else if (state.status === 'error') {
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <Card className="shadow-lg overflow-hidden bg-card">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 md:p-8 bg-background/50">
                <h3 className="text-2xl font-semibold mb-4 text-primary">{PROFILE_DATA.name}</h3>
                <p className="text-muted-foreground mb-6">
                  You can reach me via email or connect with me on social media. I'm always open to discussing new projects and opportunities.
                </p>
                <div className="space-y-4 text-muted-foreground">
                  <p><a href={`mailto:${PROFILE_DATA.email}`} className="hover:text-accent transition-colors flex items-center gap-2">{PROFILE_DATA.email}</a></p>
                  <p className="flex items-center gap-2">{PROFILE_DATA.location}</p>
                </div>
                <Separator className="my-8" />
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {SOCIAL_LINKS.map((link) => (
                      <Button key={link.name} variant="outline" asChild className="gap-2">
                        <Link href={link.url} target="_blank" rel="noopener noreferrer">
                            <link.icon className="h-5 w-5" />
                            <span>{link.name}</span>
                        </Link>
                      </Button>
                  ))}
                </div>
              </div>

              <div className="p-6 md:p-8">
                <form action={formAction}>
                  <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl">Send a Message</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" name="message" required rows={5} />
                      </div>
                      <SubmitButton />
                  </CardContent>
                </form>
              </div>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
