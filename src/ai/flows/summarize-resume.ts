// Summarize the resume with AI.
'use server';
/**
 * @fileOverview A resume summarization AI agent.
 *
 * - summarizeResume - A function that handles the resume summarization process.
 * - SummarizeResumeInput - The input type for the summarizeResume function.
 * - SummarizeResumeOutput - The return type for the summarizeResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeResumeInputSchema = z.object({
  resumeText: z
    .string()
    .describe("The text content of the resume to be summarized."),
});
export type SummarizeResumeInput = z.infer<typeof SummarizeResumeInputSchema>;

const SummarizeResumeOutputSchema = z.object({
  summary: z.string().describe("A concise summary of the resume."),
});
export type SummarizeResumeOutput = z.infer<typeof SummarizeResumeOutputSchema>;

export async function summarizeResume(input: SummarizeResumeInput): Promise<SummarizeResumeOutput> {
  return summarizeResumeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeResumePrompt',
  input: {schema: SummarizeResumeInputSchema},
  output: {schema: SummarizeResumeOutputSchema},
  prompt: `You are an expert resume summarizer. Please summarize the following resume text into a concise and impactful summary that highlights the key skills, experiences, and achievements of the candidate.

Resume Text: {{{resumeText}}}`,
});

const summarizeResumeFlow = ai.defineFlow(
  {
    name: 'summarizeResumeFlow',
    inputSchema: SummarizeResumeInputSchema,
    outputSchema: SummarizeResumeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
