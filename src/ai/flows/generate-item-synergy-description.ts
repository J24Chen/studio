'use server';
/**
 * @fileOverview Generates a description of how an item's stats synergize with a specific class's kit.
 *
 * - generateItemSynergyDescription - A function that generates the item synergy description.
 * - GenerateItemSynergyDescriptionInput - The input type for the generateItemSynergyDescription function.
 * - GenerateItemSynergyDescriptionOutput - The return type for the generateItemSynergyDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateItemSynergyDescriptionInputSchema = z.object({
  itemName: z.string().describe('The name of the item.'),
  itemDescription: z.string().describe('The description of the item.'),
  className: z.string().describe('The name of the class.'),
  classKitDescription: z.string().describe('The description of the class kit.'),
});
export type GenerateItemSynergyDescriptionInput = z.infer<typeof GenerateItemSynergyDescriptionInputSchema>;

const GenerateItemSynergyDescriptionOutputSchema = z.object({
  synergyDescription: z.string().describe('A description of how the item synergizes with the class kit.'),
});
export type GenerateItemSynergyDescriptionOutput = z.infer<typeof GenerateItemSynergyDescriptionOutputSchema>;

export async function generateItemSynergyDescription(
  input: GenerateItemSynergyDescriptionInput
): Promise<GenerateItemSynergyDescriptionOutput> {
  return generateItemSynergyDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateItemSynergyDescriptionPrompt',
  input: {schema: GenerateItemSynergyDescriptionInputSchema},
  output: {schema: GenerateItemSynergyDescriptionOutputSchema},
  prompt: `You are an expert game analyst specializing in item and class synergy in the game Rabbit & Steel.\n\nYou are provided with the following information:\n\nItem Name: {{{itemName}}}\nItem Description: {{{itemDescription}}}\nClass Name: {{{className}}}\nClass Kit Description: {{{classKitDescription}}}\n\nBased on this information, generate a description of how the item synergizes with the class's kit. Focus on how the item enhances the class's strengths or compensates for its weaknesses. Explain why the item is a good or bad choice for the class.\n\nSynergy Description:`,
});

const generateItemSynergyDescriptionFlow = ai.defineFlow(
  {
    name: 'generateItemSynergyDescriptionFlow',
    inputSchema: GenerateItemSynergyDescriptionInputSchema,
    outputSchema: GenerateItemSynergyDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
