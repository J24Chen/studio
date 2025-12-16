
import type { GameClass, Item } from './types';

export const gameClasses: GameClass[] = [
  {
    id: 'wizard',
    name: 'Wizard',
    description: 'A master of arcane arts, wielding powerful spells.',
    kit: 'Wizards rely on a large mana pool and high spell power to deal damage from a distance. They seek items that boost spell power, mana regeneration, and cooldown reduction.',
  },
  {
    id: 'assassin',
    name: 'Assassin',
    description: 'A swift and deadly rogue who excels at single_target elimination.',
    kit: 'Assassins use stealth and high burst damage to take down priority targets. They benefit from items that grant critical strike, attack damage, and on_hit effects.',
  },
  {
    id: 'heavyblade',
    name: 'Heavyblade',
    description: 'A melee powerhouse focused on heavy_hitting attacks.',
    kit: 'The Heavyblade kit revolves around high base damage, critical strikes, and abilities that cleave through multiple enemies. They benefit greatly from items that increase attack damage, critical hit chance, and attack speed.',
  },
  {
    id: 'dancer',
    name: 'Dancer',
    description: 'A nimble and agile fighter who weaves through combat with grace.',
    kit: 'Dancers excel at dodging attacks and dealing rapid, consecutive hits. Their abilities often grant temporary invulnerability or high mobility. They synergize well with on_hit effect items, attack speed, and movement speed.',
  },
  {
    id: 'druid',
    name: 'Druid',
    description: 'A versatile caster who can shapeshift and command nature.',
    kit: 'Druids can switch between healing allies and dealing damage with nature_based spells. They benefit from a mix of spell power, health, and mana regeneration.',
  },
  {
    id: 'spellsword',
    name: 'Spellsword',
    description: 'A hybrid fighter who infuses their weapon with magical energy.',
    kit: 'Spellswords combine melee attacks with magical enhancements. They benefit from items that provide both attack damage and spell power.',
  },
  {
    id: 'sniper',
    name: 'Sniper',
    description: 'A ranged marksman who picks off enemies from extreme distances.',
    kit: 'Snipers specialize in long_range, high_impact shots. Their kit includes abilities that enhance their range and critical damage. They benefit from items increasing attack damage, range, and critical hit chance.',
  },
  {
    id: 'bruiser',
    name: 'Bruiser',
    description: 'A durable fighter who can both take and deal significant damage.',
    kit: 'Bruisers are frontline fighters who can sustain through fights while being a constant threat. They benefit from items that give a mix of health, armor, and attack damage.',
  },
  {
    id: 'defender',
    name: 'Defender',
    description: 'A stalwart protector who excels at shielding allies and controlling enemies.',
    kit: 'Defenders are the ultimate frontline tanks. They use crowd control and high defensive stats to protect their team. They benefit from armor, health, and items that have supportive auras.',
  },
  {
    id: 'ancient',
    name: 'Ancient',
    description: 'A being of immense power from a forgotten era.',
    kit: 'The Ancient possesses unique and powerful abilities that defy conventional classification. Their item synergies are often mysterious and powerful.',
  },
];

export const items: Item[] = [
  {"name": "Ancient Tome", "description": "blank", "imageUrl": "/items/ancient_tome.png", "tiers": {"wizard": "F", "druid": "F", "spellsword": "F", "assassin": "F", "heavyblade": "F", "dancer": "F", "sniper": "F", "bruiser": "F", "defender": "F", "ancient": "F"}},
  {"name": "Arcane Ring", "description": "blank", "imageUrl": "/items/arcane_ring.png", "tiers": {"wizard": "F", "druid": "F", "spellsword": "F", "assassin": "F", "heavyblade": "F", "dancer": "F", "sniper": "F", "bruiser": "F", "defender": "F", "ancient": "F"}},
  {"name": "Berserkers Greataxe", "description": "blank", "imageUrl": "/items/berserkers_greataxe.png", "tiers": {"wizard": "F", "druid": "F", "spellsword": "F", "assassin": "F", "heavyblade": "F", "dancer": "F", "sniper": "F", "bruiser": "F", "defender": "F", "ancient": "F"}},
  {"name": "Blackwing Staff", "description": "blank", "imageUrl": "/items/blackwing_staff.png", "tiers": {"wizard": "F", "druid": "F", "spellsword": "F", "assassin": "F", "heavyblade": "F", "dancer": "F", "sniper": "F", "bruiser": "F", "defender": "F", "ancient": "F"}},
  {"name": "Blood Dagger", "description": "blank", "imageUrl": "/items/blood_dagger.png", "tiers": {"wizard": "F", "druid": "F", "spellsword": "F", "assassin": "F", "heavyblade": "F", "dancer": "F", "sniper": "F", "bruiser": "F", "defender": "F", "ancient": "F"}},
  {"name": "Cursed Idol", "description": "blank", "imageUrl": "/items/cursed_idol.png", "tiers": {"wizard": "F", "druid": "F", "spellsword": "F", "assassin": "F", "heavyblade": "F", "dancer": "F", "sniper": "F", "bruiser": "F", "defender": "F", "ancient": "F"}},
  {"name": "Dancers Fan", "description": "blank", "imageUrl": "/items/dancers_fan.png", "tiers": {"wizard": "F", "druid": "F", "spellsword": "F", "assassin": "F", "heavyblade": "F", "dancer": "F", "sniper": "F", "bruiser": "F", "defender": "F", "ancient": "F"}},
  {"name": "Draining Charm", "description": "blank", "imageUrl": "/items/draining_charm.png", "tiers": {"wizard": "F", "druid": "F", "spellsword": "F", "assassin": "F", "heavyblade": "F", "dancer": "F", "sniper": "F", "bruiser": "F", "defender": "F", "ancient": "F"}},
  {"name": "Elven Bow", "description": "blank", "imageUrl": "/items/elven_bow.png", "tiers": {"wizard": "F", "druid": "F", "spellsword": "F", "assassin": "F", "heavyblade": "F", "dancer": "F", "sniper": "F", "bruiser": "F", "defender": "F", "ancient": "F"}},
  {"name": "Leather Armor", "description": "blank", "imageUrl": "/items/leather_armor.png", "tiers": {"wizard": "F", "druid": "F", "spellsword": "F", "assassin": "F", "heavyblade": "F", "dancer": "F", "sniper": "F", "bruiser": "F", "defender": "F", "ancient": "F"}},
  {"name": "Longbow", "description": "blank", "imageUrl": "/items/longbow.png", "tiers": {"wizard": "F", "druid": "F", "spellsword": "F", "assassin": "F", "heavyblade": "F", "dancer": "F", "sniper": "F", "bruiser": "F", "defender": "F", "ancient": "F"}},
  {"name": "Mages Circlet", "description": "blank", "imageUrl": "/items/mages_circlet.png", "tiers": {"wizard": "F", "druid": "F", "spellsword": "F", "assassin": "F", "heavyblade": "F", "dancer": "F", "sniper": "F", "bruiser": "F", "defender": "F", "ancient": "F"}},
  {"name": "Moon Glaive", "description": "blank", "imageUrl": "/items/moon_glaive.png", "tiers": {"wizard": "F", "druid": "F", "spellsword": "F", "assassin": "F", "heavyblade": "F", "dancer": "F", "sniper": "F", "bruiser": "F", "defender": "F", "ancient": "F"}},
  {"name": "Natures Charm", "description": "blank", "imageUrl": "/items/natures_charm.png", "tiers": {"wizard": "F", "druid": "F", "spellsword": "F", "assassin": "F", "heavyblade": "F", "dancer": "F", "sniper": "F", "bruiser": "F", "defender": "F", "ancient": "F"}},
  {"name": "Raven Grimoire", "description": "blank", "imageUrl": "/items/raven_grimoire.png", "tiers": {"wizard": "F", "druid": "F", "spellsword": "F", "assassin": "F", "heavyblade": "F", "dancer": "F", "sniper": "F", "bruiser": "F", "defender": "F", "ancient": "F"}},
  {"name": "Ruby Ring", "description": "blank", "imageUrl": "/items/ruby_ring.png", "tiers": {"wizard": "F", "druid": "F", "spellsword": "F", "assassin": "F", "heavyblade": "F", "dancer": "F", "sniper": "F", "bruiser": "F", "defender": "F", "ancient": "F"}},
  {"name": "Sapphire Brooch", "description": "blank", "imageUrl": "/items/sapphire_brooch.png", "tiers": {"wizard": "F", "druid": "F", "spellsword": "F", "assassin": "F", "heavyblade": "F", "dancer": "F", "sniper": "F", "bruiser": "F", "defender": "F", "ancient": "F"}},
  {"name": "Steel Greataxe", "description": "blank", "imageUrl": "/items/steel_greataxe.png", "tiers": {"wizard": "F", "druid": "F", "spellsword": "F", "assassin": "F", "heavyblade": "F", "dancer": "F", "sniper": "F", "bruiser": "F", "defender": "F", "ancient": "F"}},
  {"name": "Swift Boots", "description": "blank", "imageUrl": "/items/swift_boots.png", "tiers": {"wizard": "F", "druid": "F", "spellsword": "F", "assassin": "F", "heavyblade": "F", "dancer": "F", "sniper": "F", "bruiser": "F", "defender": "F", "ancient": "F"}},
  {"name": "Youkai Bracelet", "description": "blank", "imageUrl": "/items/youkai_bracelet.png", "tiers": {"wizard": "F", "druid": "F", "spellsword": "F", "assassin": "F", "heavyblade": "F", "dancer": "F", "sniper": "F", "bruiser": "F", "defender": "F", "ancient": "F"}}
].sort((a, b) => a.name.localeCompare(b.name));
