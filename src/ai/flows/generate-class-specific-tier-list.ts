'use server';

/**
 * @fileOverview Generates a class-specific tier list based on item stats, class kits, and user ratings.
 *
 * - generateClassSpecificTierList - A function that generates a tier list for a specific class.
 * - TierListInput - The input type for the generateClassSpecificTierList function.
 * - TierListOutput - The return type for the generateClassSpecificTierList function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TierListInputSchema = z.object({
  className: z.string().describe('The name of the class to generate a tier list for.'),
  itemDescriptions: z.array(z.string()).describe('Array of item descriptions to be included in the tier list.'),
  itemUserRatings: z.record(z.number()).describe('A map of item names to user ratings.'),
});
export type TierListInput = z.infer<typeof TierListInputSchema>;

const TierListOutputSchema = z.object({
  tierList: z.record(z.array(z.string())).describe('A tier list of items for the specified class, with tiers as keys and item names as values.'),
});
export type TierListOutput = z.infer<typeof TierListOutputSchema>;

export async function generateClassSpecificTierList(input: TierListInput): Promise<TierListOutput> {
  return generateClassSpecificTierListFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateClassSpecificTierListPrompt',
  input: {schema: TierListInputSchema},
  output: {schema: TierListOutputSchema},
  prompt: `You are an expert game designer specializing in Rabbit & Steel.

  Based on the following item descriptions, user ratings, and class name, generate a tier list.

  Class Name: {{{className}}}

  Item Descriptions: 
  {{#each itemDescriptions}}
  - {{{this}}}
  {{/each}}

  Item User Ratings:
  {{#each (Object.keys itemUserRatings) as |itemName|}}
  - {{itemName}}: {{lookup ../itemUserRatings itemName}}
  {{/each}}

  Return a tier list in JSON format, with tiers as keys (S, A, B, C, D, F) and an array of item names as values for each tier.
  The tier list should consider how well the item synergizes with the class kit, as well as user ratings.  Favor items with high user ratings.
  Explain your reasoning for each tier list assignment in comments. 
  Ensure that all items from the itemDescriptions input are included in the tier list output. 
  Items should only exist in one tier.

  For example:
  {
    "tierList": {
      "S": ["Item1", "Item2"], // Best items for the class
      "A": ["Item3", "Item4"], // Great items for the class
      "B": ["Item5", "Item6"],
      "C": ["Item7", "Item8"],
      "D": ["Item9"],
      "F": ["Item10"] // Worst items for the class
    }
  }
  `, 
});

const generateClassSpecificTierListFlow = ai.defineFlow(
  {
    name: 'generateClassSpecificTierListFlow',
    inputSchema: TierListInputSchema,
    outputSchema: TierListOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
