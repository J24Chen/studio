import type { Gem, Tier } from './types';
import { gameClasses } from './data';

type GemInfo = {
  name: string;
  imageUrl: string;
  tiers?: { [classId: string]: Tier };
  description?: { [classId: string]: string };
};

const gemData: GemInfo[] = [
  {
    name: "Emerald Primary",
    imageUrl: "https://static.wikitide.net/rnswiki/9/96/Spr_upgrade_green_0.png",
    tiers: {
      wizard: "B",
      assassin: "S",
      heavyblade: "A",
      dancer: "C",
      druid: "C",
      spellsword: "B",
      sniper: "A",
      bruiser: "B",
      defender: "S",
      ancient: "D"
    },
    description: {
      wizard: "Deals slightly more damage. No longer slows movement when used. Size of blast is increased. Movement speed is slightly increased at all times.",
      assassin: "Using this ability no longer breaks Vanish Disappear and evade attacks  until you use an attack. Increases damage dealt by 30%. . Gains Charge Charged attacks deal 1.5x damage when used when you gain a buff.",
      heavyblade: "Damage and radius is increased. Movement speed is slightly decreased at all times.",
      dancer: "Damage is increased. No longer slows movement on use.",
      druid: "Deals damage in a small blast pointed towards your target . Deals more damage, but range is extremely short. No longer slows movement.",
      spellsword: "No longer consumes Darkspell All abilities hit twice. Counter decreases with each ability used. . Range is increased.",
      sniper: "Has a wider range. Starts battles on cooldown, cannot be reset, and is unaffected by loot that change the cooldown of abilities.",
      defender: "Greatly slows movement on use. Secondary ability now gains Charge Charged attacks deal 1.5x damage when used twice. Increments the counter on Special ability by 3.",
      ancient: "Range and size of attack is greatly increased. Your pet no longer attacks alongside you."
    }
  },
  {
    name: "Emerald Secondary",
    imageUrl: "https://static.wikitide.net/rnswiki/0/00/Spr_upgrade_green_1.png",
    tiers: {
      wizard: "A",
      assassin: "C",
      heavyblade: "A",
      dancer: "B",
      druid: "B",
      spellsword: "S",
      sniper: "B",
      bruiser: "D",
      defender: "B",
      ancient: "C"
    },
    description: {
      wizard: "Charge Charged attacks deal 1.5x damage when used your Primary twice and your Special once.",
      assassin: "Deals 60 damage 5 times to targeted enemy from a range over time . No longer resets Defensive. No longer has a GCD, but gains a 6 second cooldown. Damage and number of hits are increased, and no longer slows movement.",
      heavyblade: "Deals more damage, but no longer charges your Primary. No longer has a GCD, and gains a cooldown of 3 seconds.",
      dancer: "Radius is slightly smaller, and will no longer reset your Special. No longer has a GCD. This ability can't be manually activated, it will now activate automatically when available.",
      druid: "Deals 40 damage and applies a powerful Decay Deals damage once per second. Strength : 100 Duration : 10 seconds to all enemies for 10 seconds. No longer places down a field.",
      spellsword: "Amount of Darkspell All abilities hit twice. Counter decreases with each ability used. gained is increased to 9. No longer consumes Darkspell All abilities hit twice. Counter decreases with each ability used. . You can no longer activate this ability manually; instead, it activates automatically every 4 seconds.",
      sniper: "Inflicts Tri-Snare Deals damage and completely restores and charges your Special upon wearing off. Strength : 200(x3) Duration : 8 seconds instead.",
      bruiser: "Stops movement upon use. Increases range.",
      defender: "The attack is now centered on the player. Can no longer be charged. Can't be manually activated, and will now activate automatically when available. Your movement speed is slightly increased at all times.",
      ancient: "No longer reduces the cooldown of your Special. This ability can't be activated, it will now be activated when available."
    }
  },
  {
    name: "Emerald Special",
    imageUrl: "https://static.wikitide.net/rnswiki/5/57/Spr_upgrade_green_2.png",
    tiers: {
      wizard: "S",
      assassin: "C",
      heavyblade: "B",
      dancer: "S",
      druid: "B",
      spellsword: "C",
      sniper: "C",
      bruiser: "S",
      defender: "S",
      ancient: "S"
    },
    description: {
      wizard: "Deals damage in an extremely large radius around target. Cooldown is longer, and no longer randomly resets, but is much larger and deals more damage.",
      assassin: "Deals 60% more damage if the enemy is facing away from you. Using this ability doesn't break Vanish Disappear and evade attacks  until you use an attack. Increases damage dealt by 30%. .",
      heavyblade: "Deals more damage and has a larger radius, but slows movement and no longer jumps towards the opponent.",
      dancer: "Deals more damage, but cooldown is greatly increased.",
      druid: "Deals damage once every 3 seconds over 8 times (lasting 24 seconds). Damage, number of hits, and duration is significantly increased, but cooldown is also significantly increased. Unaffected by loot that changes the cooldown of abilities.",
      spellsword: "Stops movement upon use.",
      sniper: "Now consumes all uses of the ability at once, hitting 3 times per use. Slows movement when used.",
      bruiser: "Gain Abyssal Rage GCDs become 0.8 seconds. Speed and mobility are greatly increased. Damage is increased by 40%. Duration : 25 seconds instead. Starts battles on cooldown. Cooldown is fixed Cannot be changed by loots and cannot be reset. Primary no longer gains Charge Charged attacks deal 1.5x damage when used .",
      defender: "Now gains 1 use every time 10 abilities are used.",
      ancient: "This ability can't be activated, it will now be activated when available."
    }
  },
  {
    name: "Emerald Defensive",
    imageUrl: "https://static.wikitide.net/rnswiki/e/e6/Spr_upgrade_green_3.png",
    tiers: {
      wizard: "S",
      assassin: "B",
      heavyblade: "A",
      dancer: "B",
      druid: "B",
      spellsword: "C",
      sniper: "C",
      bruiser: "S",
      defender: "A",
      ancient: "A"
    },
    description: {
      wizard: "No longer places down a field. Damage of all abilities are increased by 20% at all times. Ability or loot effects that temporarily slow your movement no longer affect you. Now gains 3 uses per cooldown.",
      assassin: "Gain Ghost Disappear and evade attacks until you use an attack. Slows movement and increases damage dealt by 60%. Duration : 3 seconds instead. No longer gains a speed boost.",
      heavyblade: "No longer places down a field. Damage of all abilities are increased by 15% at all times, and movement speed is slightly increased. You will be unaffected by any loot and abilities that change movement speed.",
      dancer: "No longer gives buffs to self or allies. Damage of all abilities are increased by 10% at all times. Movement speed is slightly increased at all times. You are no longer slowed by using abilities or loot effects.",
      druid: "Grants Super Become faster, more mobile, invincible, and deal 30% more damage. Duration : 8 seconds , but removes Flutterstep Movement speed and mobility  are increased. Duration : 3 seconds . Cooldown is significantly increased. Starts battle on cooldown, cannot be reset and is unaffected by loot that change the cooldown of abilities. This ability can't be manually activated; it will now activate automatically when available.",
      spellsword: "Now inflicts Poisonhex Afflicted enemies take 10% extra damage, as well as damage over time. Strength : 40 Duration : 7 seconds instead.",
      sniper: "Greatly slows movement. Now additionally grants Tranquility Deal 30% more damage. Wears off if you move too far. .",
      bruiser: "No longer erases projectiles at your destination. All damage you deal is increased by 20%. Movement speed is significantly increased at all times.",
      defender: "Radius is greatly increased. Increments the counter on Special ability by 3.",
      ancient: "No longer erases projectiles or grants invulnerability. Instead, your pet will erase projectiles in a radius around it and grant brief invulnerability to all allies every 15 seconds, regardless of your commands."
    }
  },
  {
    name: "Garnet Primary",
    imageUrl: "https://static.wikitide.net/rnswiki/6/6a/Spr_upgrade_yellow_0.png",
    tiers: {
      wizard: "B",
      assassin: "A",
      heavyblade: "A",
      dancer: "A",
      druid: "B",
      spellsword: "S",
      sniper: "C",
      bruiser: "S",
      defender: "C",
      ancient: "A"
    },
    description: {
      wizard: "Deals slightly more damage. You now gain Flash-Str Your next Primary deals 150% more damage. Wears off when you use an attack. Duration : 5 seconds when you use your Defensive.",
      assassin: "You become slightly luckier at all times.",
      heavyblade: "Activates every 4 times you use any ability.",
      dancer: "Has a 50% chance to deal 60 damage to all enemies.",
      druid: "Has a 50% chance of dealing an additional 120 damage to all enemies, and a 25% chance of dealing damage to all enemies a second time.",
      spellsword: "Charge Charged attacks deal 1.5x damage when used your Special once, up to maximum of 3 times.",
      sniper: "Arrow fires directly at your target. No longer slows movement.",
      bruiser: "If used with Charge Charged attacks deal 1.5x damage when used , has 30% chance to reset Special ability.",
      defender: "Secondary ability now gains Charge Charged attacks deal 1.5x damage when used three times.",
      ancient: "Has a 30% chance of restoring a use of your secondary."
    }
  },
  {
    name: "Garnet Secondary",
    imageUrl: "https://static.wikitide.net/rnswiki/2/22/Spr_upgrade_yellow_1.png",
    tiers: {
      wizard: "S",
      assassin: "C",
      heavyblade: "D",
      dancer: "S",
      druid: "C",
      spellsword: "A",
      sniper: "C",
      bruiser: "D",
      defender: "S",
      ancient: "A"
    },
    description: {
      wizard: "No longer deals damage. Has a 50% chance to Omegacharge Charged attacks deal 3.0x damage when used your Special and reset its cooldown. Now has a cooldown of 3 seconds.",
      assassin: "Resets your Special and Defensive and gives you a brief boost to movement speed. No longer deals damage. GCD is reduced, and now has a cooldown of 5 seconds.",
      heavyblade: "Makes you briefly invincible and erases bullets in a small radius around you. Size is larger and deals significantly more damage. Gain a use every 3 times you use any other ability, up to a maximum of 2.",
      dancer: "When this ability has charge, it has a 40% chance to reset your defensive.",
      druid: "A ball of lightning that deals damage to all enemies once every 2 seconds over 6 times (lasting 12 seconds). Only one such lightning ball can be active at once. Deals slightly more damage.",
      spellsword: "Amount of Darkspell All abilities hit twice. Counter decreases with each ability used. gained is increased to 7. If used when you have 3 Darkspell All abilities hit twice. Counter decreases with each ability used. or less, has 50% chance to reset your Defensive.",
      sniper: "Restores one use of your Special and gain Supercharge Charged attacks deal 2.0x damage when used on it. Has a 50% chance of resetting instantly.",
      bruiser: "Primary ability now always gains Charge Charged attacks deal 1.5x damage when used .",
      defender: "When used with Charge Charged attacks deal 1.5x damage when used , it has 30% chance of restoring a use on Special ability and giving it Supercharge Charged attacks deal 2.0x damage when used .",
      ancient: "No longer reduces the cooldown of your Special. Instead it has a 50% chance of resetting your Special."
    }
  },
  {
    name: "Garnet Special",
    imageUrl: "https://static.wikitide.net/rnswiki/1/1c/Spr_upgrade_yellow_2.png",
    tiers: {
      wizard: "A",
      assassin: "B",
      heavyblade: "S",
      dancer: "C",
      druid: "A",
      spellsword: "S",
      sniper: "S",
      bruiser: "C",
      defender: "B",
      ancient: "A"
    },
    description: {
      wizard: "Cooldown has a 50% chance of resetting when your Primary is used. Deals more damage. Chance of resetting is higher.",
      assassin: "Deals more damage. Cooldown has a 50% chance of instantly resetting.",
      heavyblade: "Deals less damage. Now gives Flash-Str Your next Primary deals 150% more damage. Wears off when you use an attack. Duration : 5 seconds .",
      dancer: "Deals more damage. Has a 50% chance of resetting every time you Primary or Secondary are used.",
      druid: "Deals damage to all enemies once every 3 seconds over 4 times (lasting 12 seconds). Deals slightly more damage. Erases projectiles in a small radius upon placement.",
      spellsword: "On use, has a 30% chance to gain an extra use and Charge Charged attacks deal 1.5x damage when used itself.",
      sniper: "Has a 10% chance to Omegacharge Charged attacks deal 3.0x damage when used your Primary when it hits an enemy.",
      bruiser: "Damaged increased to 500.",
      defender: "Has a 50% chance to gain one usage when used.",
      ancient: "Gains one use every 3 times you use your Secondary."
    }
  },
  {
    name: "Garnet Defensive",
    imageUrl: "https://static.wikitide.net/rnswiki/f/f6/Spr_upgrade_yellow_3.png",
    tiers: {
      wizard: "A",
      assassin: "B",
      heavyblade: "D",
      dancer: "S",
      druid: "S",
      spellsword: "B",
      sniper: "S",
      bruiser: "C",
      defender: "B",
      ancient: "S"
    },
    description: {
      wizard: "Places down a magic field that lasts 5 seconds . While standing in the field, gain Rabbitluck Temporarily become extremely lucky. Duration : 1 seconds . Duration of field is shorter. Cooldown cannot be reset by any ability or loot effects.",
      assassin: "Cooldown has a 40% chance of instantly resetting.",
      heavyblade: "Grants a brief invulnerability to self for 3 seconds. No longer creates a field of invulnerability. Cooldown is shortened. Has a 40% chance of granting you Super Become faster, more mobile, invincible, and deal 30% more damage. Duration : 5 seconds for 5 seconds.",
      dancer: "Grants all allies Rabbitluck Temporarily become extremely lucky. Duration : 5 seconds . Cooldown cannot be reset by any ability or loot effects.",
      druid: "Grants Warcry Deal 20% more damage. Duration : 8 seconds , but removes Flutterstep Movement speed and mobility  are increased. Duration : 3 seconds . Now has 2 uses. Instead of gaining uses every cooldown, has a 15% chance to gain a use every time you use an ability.",
      spellsword: "No longer inflicts Hex Afflicted enemies take 10% extra damage. . All allies gain Antihex Deal 20% more damage. Duration : 5 seconds",
      sniper: "Supercharge Charged attacks deal 2.0x damage when used your secondary in addition to your Primary.",
      bruiser: "Primary ability no longer gains Charge Charged attacks deal 1.5x damage when used . Secondary ability gains Supercharge Charged attacks deal 2.0x damage when used twice.",
      defender: "Restores 2 uses on Special ability and gain Charge Charged attacks deal 1.5x damage when used on it twice.",
      ancient: "Additionally deals damage to all enemies. Has a 30% chance of instantly resetting itself."
    }
  },
  {
    name: "Ruby Primary",
    imageUrl: "https://static.wikitide.net/rnswiki/1/15/Spr_upgrade_red_0.png",
    tiers: {
      wizard: "B",
      assassin: "C",
      heavyblade: "S",
      dancer: "A",
      druid: "A",
      spellsword: "B",
      sniper: "S",
      bruiser: "S",
      defender: "S",
      ancient: "D"
    },
    description: {
      wizard: "Has a larger radius and deals significantly more damage. Now has a cooldown of 4 seconds.",
      assassin: "GCD is longer, and now slows movement on use. Damage and size are greatly increased. Only hits once",
      heavyblade: "Deals much more damage and size is larger, but GCD is slower. Slows movement on use.",
      dancer: "No longer has a GCD, and gains a cooldown of 4 seconds.",
      druid: "Deals damage in a large radius near the target. Deals significantly more damage, but GCD speed is significantly slowed.",
      spellsword: "Now consumes 4 Darkspell All abilities hit twice. Counter decreases with each ability used. .",
      sniper: "Now inflicts Burn Deals damage upon wearing off, equal to the damage of the hit that applied burn. Duration : 5 seconds .",
      bruiser: "Damage increased to 250. GCD increased to 2.4s ",
      defender: "No longer increments the counter on the Special ability. Secondary ability now gains Charge Charged attacks deal 1.5x damage when used twice.",
      ancient: "Your pet deals damage in a large radius around it. No longer fires a blast yourself."
    }
  },
  {
    name: "Ruby Secondary",
    imageUrl: "https://static.wikitide.net/rnswiki/e/ea/Spr_upgrade_red_1.png",
    tiers: {
      wizard: "C",
      assassin: "B",
      heavyblade: "A",
      dancer: "D",
      druid: "B",
      spellsword: "B",
      sniper: "C",
      bruiser: "S",
      defender: "A",
      ancient: "A"
    },
    description: {
      wizard: "Deals damage in a large radius near the target. Damage is much higher, but now has a cooldown of 4 seconds.",
      assassin: "Deals more damage, but only hits once. No longer has a GCD, and gains a cooldown of 4 seconds.",
      heavyblade: "Supercharge Charged attacks deal 2.0x damage when used your Primary and Special. No longer deals any damage. Gains a cooldown of 6 seconds. Slows movement on use.",
      dancer: "Deals more damage and has a larger radius, but slows movement on use.",
      druid: "Deals damage once after 8 seconds. Damage is significantly increased. Size is slightly increased. Number of hits reduced.",
      spellsword: "Amount of Darkspell All abilities hit twice. Counter decreases with each ability used. gained is increased to 9. Deals 4x damage if you have 0 Darkspell All abilities hit twice. Counter decreases with each ability used. .",
      sniper: "No longer applies a debuff. Restores a use of your Special when used.",
      bruiser: "Gain Berserk GCDs become 0.8 seconds. Movement speed and mobility are increased. Duration : 5 seconds .",
      defender: "Size of blast is increased. Gain Charge Charged attacks deal 1.5x damage when used when Special ability is used. Consume all Charge Charged attacks deal 1.5x damage when used when used. For each Charge Charged attacks deal 1.5x damage when used consumed, increase damage by 50% and the counter on Special ability by 1.",
      ancient: "Reduces the cooldown of your Special by 8 seconds each time it is used."
    }
  },
  {
    name: "Ruby Special",
    imageUrl: "https://static.wikitide.net/rnswiki/d/df/Spr_upgrade_red_2.png",
    tiers: {
      wizard: "C",
      assassin: "B",
      heavyblade: "B",
      dancer: "B",
      druid: "B",
      spellsword: "B",
      sniper: "A",
      bruiser: "B",
      defender: "A",
      ancient: "B"
    },
    description: {
      wizard: "Deals more damage. No longer randomly resets when you use your Primary. Now resets when you use your Defensive.",
      assassin: "Deals more damage, but no longer deals additional damage to enemies facing away from you. Inflicts Burn Deals damage upon wearing off, equal to the damage of the hit that applied burn. Duration : 5 seconds .",
      heavyblade: "Deals more damage, but cooldown is increased. No longer has multiple uses.",
      dancer: "Inflicts Burn Deals damage upon wearing off, equal to the damage of the hit that applied burn. Duration : 5 seconds",
      druid: "Explodes after 3 seconds, dealing damage. Deals more damage. Only hits once. Cooldown is increased, but now gains 3 uses every cooldown.",
      spellsword: "Now consumes all Darkspell All abilities hit twice. Counter decreases with each ability used. . Deals listed damage multiplied by amount of Darkspell All abilities hit twice. Counter decreases with each ability used. you currently have. Width of attack is larger. Slows movement upon use.",
      sniper: "Has a greatly increased radius.",
      bruiser: "No longer gain Berserk GCDs become 0.8 seconds. Movement speed and mobility are increased. . Primary gains Omegacharge Charged attacks deal 3.0x damage when used three times instead.",
      defender: "Now gains 2 uses every time 7 abilities are used.",
      ancient: "Can no longer be reset by ability or loot effects."
    }
  },
  {
    name: "Ruby Defensive",
    imageUrl: "https://static.wikitide.net/rnswiki/4/4a/Spr_upgrade_red_3.png",
    tiers: {
      wizard: "S",
      assassin: "A",
      heavyblade: "S",
      dancer: "C",
      druid: "D",
      spellsword: "A",
      sniper: "C",
      bruiser: "D",
      defender: "B",
      ancient: "C"
    },
    description: {
      wizard: "Places down a magic field that lasts 8 seconds . While standing in the field, gain Nova Deal 50% more damage. . Duration of the field is shorter, and the buff granted is stronger.",
      assassin: "Supercharge Charged attacks deal 2.0x damage when used your Special ability. No longer gains Vanish Disappear and evade attacks  until you use an attack. Increases damage dealt by 30%. .",
      heavyblade: "Grants invulnerability to self for 3 seconds. No longer creates a field of invulnerability. Supercharge Charged attacks deal 2.0x damage when used your Primary 3 times.",
      dancer: "Grants all allies Warcry Deal 20% more damage. Duration : 10 seconds for 10 seconds and invulnerability for 2 seconds. Buff lasts longer. Can no longer be reset by ability or loot effects.",
      druid: "Deals damage around you, but removes Flutterstep Movement speed and mobility  are increased. Duration : 3 seconds . Cooldown is longer, and starts battles on cooldown.",
      spellsword: "Only hits in a radius around user.",
      sniper: "Omegacharge Charged attacks deal 3.0x damage when used your primary.",
      bruiser: "Stops movement upon use. Primary ability gains Charge Charged attacks deal 1.5x damage when used twice. Gain Berserk GCDs become 0.8 seconds. Movement speed and mobility are increased. Duration : 5 seconds .",
      defender: "Duration of the invulnerability field is increased by 1 second Increments the counter on Special ability by 3.",
      ancient: "No longer restores a usage of your Secondary. All damage you deal increases by 20%."
    }
  },
  {
    name: "Sapphire Primary",
    imageUrl: "https://static.wikitide.net/rnswiki/f/f6/Spr_upgrade_blue_0.png",
    tiers: {
      wizard: "A",
      assassin: "S",
      heavyblade: "D",
      dancer: "D",
      druid: "S",
      spellsword: "C",
      sniper: "A",
      bruiser: "S",
      defender: "A",
      ancient: "A"
    },
    description: {
      wizard: "GCD is shortened, but damage is reduced. Size of blast is also reduced.",
      assassin: "Damage is reduced, but deals damage more times.",
      heavyblade: "GCD is faster.",
      dancer: "Damage is reduced, but number of hits is increased.",
      druid: "Damage is slightly reduced. Now additionally activates when you use any ability.",
      spellsword: "Deals more damage and GCD is reduced. Deals more damage and hits more times",
      sniper: "Now deals damage multiple times.",
      bruiser: "Deals 30% more damage to enemies facing away from you.",
      defender: "No special effects.",
      ancient: "Your pet deals damage 3 times in a radius around it. No longer fires a blast yourself."
    }
  },
  {
    name: "Sapphire Secondary",
    imageUrl: "https://static.wikitide.net/rnswiki/0/05/Spr_upgrade_blue_1.png",
    tiers: {
      wizard: "C",
      assassin: "S",
      heavyblade: "C",
      dancer: "S",
      druid: "A",
      spellsword: "S",
      sniper: "S",
      bruiser: "A",
      defender: "B",
      ancient: "C"
    },
    description: {
      wizard: "Deals more damage, and now has 3 uses and a cooldown of 8 seconds. Deals 30% more damage if the enemy is facing away from you.",
      assassin: "Deals slightly more damage. This ability no longer has a GCD, and can't be manually activated. Instead, it activates automatically every 10 times you deal damage.",
      heavyblade: "Gives you a small boost of speed. GCD is faster. No longer deals damage.",
      dancer: "Deals more damage. Has a 40% chance to hit twice more.",
      druid: "Deals damage once every 1 second over 6 times (lasting 6 seconds). Field lingers for less time. Damage per hit is slightly increased.",
      spellsword: "Amount of Darkspell All abilities hit twice. Counter decreases with each ability used. gained is increased to 7. No longer slows movement. Hits 4 additional times if you have less than 3 Darkspell All abilities hit twice. Counter decreases with each ability used. .",
      sniper: "Snare Deals damage and resets your Special upon wearing off. Strength : 200 Duration : 5 seconds now deals 200 damage. Additionally deals 100 damage twice to enemies you apply debuffs to.",
      bruiser: "Number of Hits increased to 70(x3) .",
      defender: "No special effects.",
      ancient: "Deals more damage and cooldown is reduced. Maximum uses are increased."
    }
  },
  {
    name: "Sapphire Special",
    imageUrl: "https://static.wikitide.net/rnswiki/d/d1/Spr_upgrade_blue_2.png",
    tiers: {
      wizard: "C",
      assassin: "A",
      heavyblade: "C",
      dancer: "B",
      druid: "S",
      spellsword: "S",
      sniper: "B",
      bruiser: "A",
      defender: "A",
      ancient: "B"
    },
    description: {
      wizard: "Damage is reduced, but now hits 4 times, erases bullets in a small radius, and radius is greatly increased.",
      assassin: "Damage is reduced, but hits multiple times.",
      heavyblade: "Cooldown is shorter, and now has a maximum of 3 uses",
      dancer: "Damage is reduced, but now hits 3 times.",
      druid: "Deals damage once every 1 second over 4 times (lasting 4 seconds). Active time and cooldown are reduced.",
      spellsword: "Gains 5 uses per cooldown.",
      sniper: "Now gains 2 uses per cooldown, or when it's reset by other effects.",
      bruiser: "Damaged increased to 200. Cooldown Reduced to 7s",
      defender: "Now gains 2 uses every time 3 abilities are used.",
      ancient: "Gains 3 uses per cooldown."
    }
  },
  {
    name: "Sapphire Defensive",
    imageUrl: "https://static.wikitide.net/rnswiki/c/c0/Spr_upgrade_blue_3.png",
    tiers: {
      wizard: "B",
      assassin: "B",
      heavyblade: "D",
      dancer: "B",
      druid: "B",
      spellsword: "S",
      sniper: "A",
      bruiser: "S",
      defender: "A",
      ancient: "A"
    },
    description: {
      wizard: "Places down a magic field that lasts 3 seconds . While standing in the field, gain Ghost Disappear and evade attacks until you use an attack. Slows movement and increases damage dealt by 60%. Duration : 1 seconds . Duration of field is shorter.",
      assassin: "Cooldown is reduced.",
      heavyblade: "Field is much larger, but only lasts 0.60 seconds. Gain 2 uses per cooldown.",
      dancer: "Grants all allies Vanish Disappear and evade attacks  until you use an attack. Increases damage dealt by 30%. Duration : 5 seconds and Warcry Deal 20% more damage. Duration : 5 seconds .",
      druid: "Grants Vanish Disappear and evade attacks  until you use an attack. Increases damage dealt by 30%. Duration : 3 seconds , but removes Flutterstep Movement speed and mobility  are increased. Duration : 3 seconds . No longer has a cooldown. Gains a use every 25 times you deal damage to an enemy.",
      spellsword: "Cooldown is decreased.",
      sniper: "Now additionally grants Vanish Disappear and evade attacks  until you use an attack. Increases damage dealt by 30%. Duration : 3 seconds .",
      bruiser: "No longer erases projectiles at your destination. Cooldown is fixed Cannot be changed by loots. .",
      defender: "Increments the counter on Special ability by 2.",
      ancient: "Cooldown is reduced."
    }
  },
  {
    name: "Opal Primary",
    imageUrl: "https://static.wikitide.net/rnswiki/e/e5/Spr_upgrade_purple_0.png",
    tiers: {
      wizard: "S",
      assassin: "D",
      heavyblade: "B",
      dancer: "S",
      druid: "A",
      spellsword: "A",
      sniper: "B",
      bruiser: "C",
      defender: "C",
      ancient: "B"
    },
    description: {
      wizard: "Deals damage in a large radius around you . Deals slightly more damage. Decreases all other cooldowns by 2 seconds each time it's used.",
      assassin: "Deals more damage. No longer randomly resets Defensive, now resets your Defensive every 5 times this ability is used.",
      heavyblade: "Now has a much faster GCD, and a cooldown of 6 seconds. Gains 4 uses per cooldown.",
      dancer: "No longer deals damage. Charge Charged attacks deal 1.5x damage when used s your Secondary four times. Supercharge Charged attacks deal 2.0x damage when used s your Special.",
      druid: "Reduces the cooldown of your Special by 2 seconds each time it's used.",
      spellsword: "Now Consumes 2 Darkspell All abilities hit twice. Counter decreases with each ability used. .",
      sniper: "Cooldown will no longer reset when you hit a target.",
      bruiser: "Increase Damage to 280. Cooldown increased to 2s",
      defender: "Increments the counter on Special ability by 2.",
      ancient: "Reduces the cooldown of your Special by 1 second each time it is used."
    }
  },
  {
    name: "Opal Secondary",
    imageUrl: "https://static.wikitide.net/rnswiki/a/a2/Spr_upgrade_purple_1.png",
    tiers: {
      wizard: "B",
      assassin: "S",
      heavyblade: "S",
      dancer: "A",
      druid: "A",
      spellsword: "B",
      sniper: "S",
      bruiser: "C",
      defender: "B",
      ancient: "A"
    },
    description: {
      wizard: "No longer deals damage. Supercharge Charged attacks deal 2.0x damage when used your Special.",
      assassin: "Will additionally activate when any ability or loot with a cooldown activates.",
      heavyblade: "If your special has 3 seconds or less on its cooldown, it will reset instantly.",
      dancer: "Deals more damage. When this ability has Charge Charged attacks deal 1.5x damage when used , using it will reset your Special.",
      druid: "Summons an ethereal ally that fires at your target once every 3 seconds over 5 times (lasting 15 seconds), dealing 170 damage each time. Ability effect is changed, and now has a cooldown.",
      spellsword: "Additionally deals listed damage (only 1 hit) to enemies you apply debuffs to. Darkspell All abilities hit twice. Counter decreases with each ability used. is gained via these hits as well.",
      sniper: "Snare Deals damage and resets your Special upon wearing off. Strength : 400 Duration : 5 seconds now deals 400 damage.",
      bruiser: "Decreases Special ability cooldown by 0.5s upon use",
      defender: "The attack is now centered on the player. Size of blast is increased. Increments the counter on Special ability by 2.",
      ancient: "Reduces the cooldown of your Special by 6 seconds each time it is used."
    }
  },
  {
    name: "Opal Special",
    imageUrl: "https://static.wikitide.net/rnswiki/d/d4/Spr_upgrade_purple_2.png",
    tiers: {
      wizard: "A",
      assassin: "A",
      heavyblade: "F",
      dancer: "B",
      druid: "A",
      spellsword: "A",
      sniper: "A",
      bruiser: "A",
      defender: "A",
      ancient: "D"
    },
    description: {
      wizard: "Deals more damage. Cooldown is shorter, but no longer randomly resets.",
      assassin: "Deals more damage, and is now a ranged attack.",
      heavyblade: "Has a maximum of 3 uses. Consumes all uses of the ability at once, hitting once per use. Now has a cooldown of 4 seconds.",
      dancer: "Deals more damage. Cooldown is greatly reduced, but no longer randomly resets.",
      druid: "Deals damage once every 3 seconds over 6 times (lasting 18 seconds). Active time and number of hits is increased.",
      spellsword: "Now consumes 2 Darkspell All abilities hit twice. Counter decreases with each ability used. .",
      sniper: "Now gains 6 uses per cooldown. Can no longer be reset by other ability or loot effects.",
      bruiser: "Increases Berserk GCDs become 0.8 seconds. Movement speed and mobility are increased. Duration : 10 seconds duration to 10s.",
      defender: "No special effects.",
      ancient: "Deals more damage. Number of hits are reduced, but cooldown is also greatly reduced."
    }
  },
  {
    name: "Opal Defensive",
    imageUrl: "https://static.wikitide.net/rnswiki/a/ae/Spr_upgrade_purple_3.png",
    tiers: {
      wizard: "C",
      assassin: "A",
      heavyblade: "D",
      dancer: "A",
      druid: "D",
      spellsword: "S",
      sniper: "B",
      bruiser: "S",
      defender: "C",
      ancient: "A"
    },
    description: {
      wizard: "Grant Astra Deal 15% more damage. Duration : 7 seconds to yourself for 7 seconds . Cooldown is decreased. No longer lays down a field.",
      assassin: "Sends a shadow clone to deal 220 damage to your target.",
      heavyblade: "Perform a spinning slash, dealing 300 damage. No longer places down a field. Cooldown is reduced.",
      dancer: "Grants all allies Haste Hastens GCD actions by 20% and moderately increases movement speed. Duration : 5 seconds and Warcry Deal 20% more damage. Duration : 5 seconds .",
      druid: "Grants Haste Hastens GCD actions by 20% and moderately increases movement speed. Duration : 8 seconds , but removes Flutterstep Movement speed and mobility  are increased. Duration : 3 seconds . Instead of gaining uses every cooldown, gains a use every 3 times you use your Special.",
      spellsword: "Now inflicts Superhex Afflicted enemies take 20% extra damage. Duration : 5 seconds instead.",
      sniper: "Grants a great burst to movement speed. No longer charges other abilities. Gains 2 uses per cooldown. Your movement speed is moderately reduced at all times. All damage you deal is increased by 20%.",
      bruiser: "Now gains back all uses every cooldown.",
      defender: "Time spent rolling is increased to 1 second. Increments the counter on Special ability by 5.",
      ancient: "Decreases all other cooldowns (including loot) by 3 seconds when used. Can no longer be reset by ability or loot effects."
    }
  }
]

export const gems: Gem[] = gemData.map((gemInfo, i) => {
  const details: { [classId: string]: { description: string; tier: Tier } } = {};
  const tiers: Tier[] = ['S', 'A', 'B', 'C', 'D', 'F'];

  gameClasses.forEach((gc, index) => {
    //Will be removed later, as description and tiers will be defined later
    const tier = gemInfo.tiers?.[gc.id] ?? tiers[(i + index) % tiers.length];
    const description = gemInfo.description?.[gc.id] ?? `A description for ${gemInfo.name} for the ${gc.name} class. It provides a unique bonus.`;
    
    details[gc.id] = {
      description,
      tier,
    };
  });

  return {
    name: gemInfo.name,
    imageUrl: gemInfo.imageUrl,
    details,
  };
});
