'use server';
/**
 * @fileOverview Sorts user-created tier lists based on AI analysis to provide more effective item rankings.
 *
 * - sortUserTierListsByAI - A function that sorts user tier lists by AI analysis.
 * - SortUserTierListsByAIInput - The input type for the sortUserTierListsByAI function.
 * - SortUserTierListsByAIOutput - The return type for the sortUserTierListsByAI function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SortUserTierListsByAIInputSchema = z.object({
  tierList: z.array(
    z.object({
      item: z.string().describe('The name of the item in the tier list.'),
      tier: z.string().describe('The tier of the item (e.g., S, A, B, C, D).'),
      class: z.string().describe('The class the tier list is for.'),
      userRating: z.number().describe('The rating given by the user for this item in this tier list.'),
    })
  ).describe('The user-created tier list to be sorted by AI analysis.'),
});
export type SortUserTierListsByAIInput = z.infer<typeof SortUserTierListsByAIInputSchema>;

const SortUserTierListsByAIOutputSchema = z.array(
  z.object({
    item: z.string().describe('The name of the item in the tier list.'),
    tier: z.string().describe('The tier of the item (e.g., S, A, B, C, D).'),
    class: z.string().describe('The class the tier list is for.'),
    aiAnalysis: z.string().describe('The AI analysis of the item in the tier list.'),
    suggestedTier: z.string().describe('The AI suggested tier for the item based on the user rating.'),
  })
).describe('The tier list sorted by AI analysis.');
export type SortUserTierListsByAIOutput = z.infer<typeof SortUserTierListsByAIOutputSchema>;

export async function sortUserTierListsByAI(input: SortUserTierListsByAIInput): Promise<SortUserTierListsByAIOutput> {
  return sortUserTierListsByAIFlow(input);
}

const prompt = ai.definePrompt({
  name: 'sortUserTierListsByAIPrompt',
  input: {schema: SortUserTierListsByAIInputSchema},
  output: {schema: SortUserTierListsByAIOutputSchema},
  prompt: `You are an AI assistant designed to analyze user-created tier lists for the game Rabbit & Steel and provide insights.

You will receive a tier list with item names, their assigned tiers, the class they are for, and user ratings.

Analyze each item in the tier list and provide an AI analysis of its effectiveness for the given class based on the user rating.

Suggest a tier for each item based on your analysis of the user rating.

Tier List:
{{#each tierList}}
- Item: {{this.item}}, Tier: {{this.tier}}, Class: {{this.class}}, User Rating: {{this.userRating}}
{{/each}}

Output a sorted tier list with AI analysis and suggested tiers for each item.

Output format should be a JSON array of objects with the following keys:
- item: The name of the item.
- tier: The original tier of the item.
- class: The class the tier list is for.
- aiAnalysis: Your analysis of the item's effectiveness for the class.
- suggestedTier: Your suggested tier for the item.
`,
});

const sortUserTierListsByAIFlow = ai.defineFlow(
  {
    name: 'sortUserTierListsByAIFlow',
    inputSchema: SortUserTierListsByAIInputSchema,
    outputSchema: SortUserTierListsByAIOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
