
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { Loader2, Send } from 'lucide-react';
import { sendContactForm, type ContactFormState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/data';
import { FadeIn } from '../ui/fade-in';

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
  const [state, formAction] = useFormState(sendContactForm, initialState);

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
    <section id="contact" className="bg-card border-t">
      <div className="container mx-auto max-w-5xl px-4">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Have a project in mind or just want to say hi? Feel free to reach out.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <FadeIn>
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                    <p className="text-muted-foreground mb-6">
                        You can reach me via email or connect with me on social media. I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
                    </p>
                    <div className="space-y-4 text-muted-foreground">
                        <p><a href="mailto:hello@example.com" className="hover:text-accent transition-colors">hello@example.com</a></p>
                        <p>New York, NY, USA</p>
                    </div>
                    <div className="mt-8 flex items-center gap-4">
                        {SOCIAL_LINKS.map((link) => (
                            <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-accent p-2 rounded-full bg-background hover:bg-accent/10">
                                <link.icon className="h-6 w-6" />
                                <span className="sr-only">{link.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Card className="shadow-lg">
                  <form action={formAction}>
                  <CardHeader>
                      <CardTitle>Send a Message</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
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
              </Card>
            </FadeIn>
        </div>
      </div>
    </section>
  );
}
