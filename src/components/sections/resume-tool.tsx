
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Bot, Loader2, Sparkles } from 'lucide-react';
import { summarizeResumeAction, type SummarizeFormState } from '@/app/actions';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const initialState: SummarizeFormState = {
  message: '',
  summary: null,
  status: 'idle',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Summarizing...
        </>
      ) : (
        <>
          <Bot className="mr-2 h-4 w-4" />
          Summarize with AI
        </>
      )}
    </Button>
  );
}

export function ResumeToolSection() {
  const [state, formAction] = useFormState(summarizeResumeAction, initialState);

  return (
    <section id="resume-tool" className="bg-background">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">AI Resume Summarizer</h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Paste a resume into the text field below to get an AI-generated summary.
          </p>
        </div>
        <Card className="shadow-lg">
          <form action={formAction}>
            <CardHeader>
              <CardTitle>Resume Input</CardTitle>
              <CardDescription>
                Copy and paste the full text of a resume here. The more detailed, the better the summary.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                name="resumeText"
                placeholder="Paste resume text here..."
                rows={10}
                className="resize-y"
                required
                aria-label="Resume text input"
              />
              {state.status === 'error' && state.message && (
                <p className="mt-2 text-sm text-destructive">{state.message}</p>
              )}
            </CardContent>
            <CardFooter>
              <SubmitButton />
            </CardFooter>
          </form>

          {state.status === 'success' && state.summary && (
            <div className="border-t p-6">
               <h3 className="flex items-center text-xl font-semibold mb-4">
                <Sparkles className="mr-2 h-5 w-5 text-accent" />
                Generated Summary
               </h3>
               <div className="prose prose-sm max-w-none rounded-md border bg-muted/50 p-4 text-muted-foreground">
                <p>{state.summary}</p>
               </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
