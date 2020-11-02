// Namespace Configuration Values
export const DND5E = {};

// ASCII Artwork
DND5E.ASCII = ``;


/**
 * The set of Ability Scores used within the system
 * @type {Object}
 */
DND5E.abilities = {
  "str": "CARBON.AbilityStr",
  "dex": "CARBON.AbilityDex",
  "con": "CARBON.AbilityCon",
  "int": "CARBON.AbilityInt",
  "tec": "CARBON.AbilityTec",
  "peo": "CARBON.AbilityPeo"
};

DND5E.abilityAbbreviations = {
  "str": "CARBON.AbilityStrAbbr",
  "dex": "CARBON.AbilityDexAbbr",
  "con": "CARBON.AbilityConAbbr",
  "int": "CARBON.AbilityIntAbbr",
  "tec": "CARBON.AbilityTecAbbr",
  "peo": "CARBON.AbilityPeoAbbr"
};

/* -------------------------------------------- */

/**
 * Character alignment options
 * @type {Object}
 */
DND5E.alignments = {
  'lg': "CARBON.AlignmentLG",
  'ng': "CARBON.AlignmentNG",
  'cg': "CARBON.AlignmentCG",
  'ln': "CARBON.AlignmentLN",
  'tn': "CARBON.AlignmentTN",
  'cn': "CARBON.AlignmentCN",
  'le': "CARBON.AlignmentLE",
  'ne': "CARBON.AlignmentNE",
  'ce': "CARBON.AlignmentCE"
};


DND5E.weaponProficiencies = {
  "sim": "CARBON.WeaponSimpleProficiency",
  "mar": "CARBON.WeaponMartialProficiency"
};

DND5E.toolProficiencies = {
  "chef": "CARBON.ToolChef",
  "disarm": "CARBON.ToolDisarming",
  "disguise": "CARBON.ToolDisguise",
  "firstaid": "CARBON.ToolFirstAid",
  "forge": "CARBON.ToolForge",
  "gamble": "CARBON.ToolGambling",
  "hacker": "CARBON.ToolHacker",
  "lockpick": "CARBON.ToolLockpick",
  "repair": "CARBON.ToolRepair"
};


/* -------------------------------------------- */

/**
 * This Object defines the various lengths of time which can occur
 * @type {Object}
 */
DND5E.timePeriods = {
  "inst": "CARBON.TimeInst",
  "turn": "CARBON.TimeTurn",
  "round": "CARBON.TimeRound",
  "minute": "CARBON.TimeMinute",
  "hour": "CARBON.TimeHour",
  "day": "CARBON.TimeDay",
  "month": "CARBON.TimeMonth",
  "year": "CARBON.TimeYear",
  "perm": "CARBON.TimePerm",
  "spec": "CARBON.Special"
};


/* -------------------------------------------- */

/**
 * This describes the ways that an ability can be activated
 * @type {Object}
 */
DND5E.abilityActivationTypes = {
  "none": "CARBON.None",
  "action": "CARBON.Action",
  "bonus": "CARBON.BonusAction",
  "reaction": "CARBON.Reaction",
  "minute": DND5E.timePeriods.minute,
  "hour": DND5E.timePeriods.hour,
  "day": DND5E.timePeriods.day,
  "special": DND5E.timePeriods.spec,
  "legendary": "CARBON.LegAct",
  "lair": "CARBON.LairAct",
  "crew": "CARBON.VehicleCrewAction"
};

/* -------------------------------------------- */


DND5E.abilityConsumptionTypes = {
  "ammo": "CARBON.ConsumeAmmunition",
  "attribute": "CARBON.ConsumeAttribute",
  "material": "CARBON.ConsumeMaterial",
  "charges": "CARBON.ConsumeCharges"
};


/* -------------------------------------------- */

// Creature Sizes
DND5E.actorSizes = {
  "tiny": "CARBON.SizeTiny",
  "sm": "CARBON.SizeSmall",
  "med": "CARBON.SizeMedium",
  "lg": "CARBON.SizeLarge",
  "huge": "CARBON.SizeHuge",
  "grg": "CARBON.SizeGargantuan"
};

DND5E.tokenSizes = {
  "tiny": 1,
  "sm": 1,
  "med": 1,
  "lg": 2,
  "huge": 3,
  "grg": 4
};

/* -------------------------------------------- */

/**
 * Classification types for item action types
 * @type {Object}
 */
DND5E.itemActionTypes = {
  "mwak": "CARBON.ActionMWAK",
  "rwak": "CARBON.ActionRWAK",
  "msak": "CARBON.ActionMSAK",
  "rsak": "CARBON.ActionRSAK",
  "save": "CARBON.ActionSave",
  "heal": "CARBON.ActionHeal",
  "abil": "CARBON.ActionAbil",
  "util": "CARBON.ActionUtil",
  "other": "CARBON.ActionOther"
};

/* -------------------------------------------- */

DND5E.itemCapacityTypes = {
  "items": "CARBON.ItemContainerCapacityItems",
  "weight": "CARBON.ItemContainerCapacityWeight"
};

/* -------------------------------------------- */

/**
 * Enumerate the lengths of time over which an item can have limited use ability
 * @type {Object}
 */
DND5E.limitedUsePeriods = {
  "sr": "CARBON.ShortRest",
  "lr": "CARBON.LongRest",
  "day": "CARBON.Day",
  "charges": "CARBON.Charges"
};


/* -------------------------------------------- */

/**
 * The set of equipment types for armor, clothing, and other objects which can ber worn by the character
 * @type {Object}
 */
DND5E.equipmentTypes = {
  "light": "CARBON.EquipmentLight",
  "medium": "CARBON.EquipmentMedium",
  "heavy": "CARBON.EquipmentHeavy",
  "bonus": "CARBON.EquipmentBonus",
  "natural": "CARBON.EquipmentNatural",
  "clothing": "CARBON.EquipmentClothing",
  "trinket": "CARBON.EquipmentTrinket",
  "vehicle": "CARBON.EquipmentVehicle",
  "helmet": "CARBON.EquipmentHelmet",
  "attachment": "CARBON.EquipmentAttachmentMod",
  "augmentation": "CARBON.EquipmentAugmentation"
};


/* -------------------------------------------- */

/**
 * The set of Armor Proficiencies which a character may have
 * @type {Object}
 */
DND5E.armorProficiencies = {
  "lgt": DND5E.equipmentTypes.light,
  "med": DND5E.equipmentTypes.medium,
  "hvy": DND5E.equipmentTypes.heavy,
  "shl": "CARBON.EquipmentShieldProficiency"
};


/* -------------------------------------------- */

/**
 * Enumerate the valid consumable types which are recognized by the system
 * @type {Object}
 */
DND5E.consumableTypes = {
  "ammo": "CARBON.ConsumableAmmunition",
  "potion": "CARBON.ConsumablePotion",
  "poison": "CARBON.ConsumablePoison",
  "food": "CARBON.ConsumableFood",
  "scroll": "CARBON.ConsumableScroll",
  "wand": "CARBON.ConsumableWand",
  "rod": "CARBON.ConsumableRod",
  "trinket": "CARBON.ConsumableTrinket"
};

/* -------------------------------------------- */

/**
 * The valid currency denominations supported by the 5e system
 * @type {Object}
 */
DND5E.currencies = {
  "wonlongs": "₩",
};


/**
 * Define the upwards-conversion rules for registered currency types
 * @type {{string, object}}
 */
DND5E.currencyConversion = {

};

/* -------------------------------------------- */


// Damage Types
DND5E.damageTypes = {
  "acid": "CARBON.DamageAcid",
  "ballistic": "CARBON.DamageBallistic",
  "bludgeoning": "CARBON.DamageBludgeoning",
  "cold": "CARBON.DamageCold",
  "fire": "CARBON.DamageFire",
  "electrical": "CARBON.DamageElectrical",
  "piercing": "CARBON.DamagePiercing",
  "poison": "CARBON.DamagePoison",
  "psychic": "CARBON.DamagePsychic",
  "radiant": "CARBON.DamageRadiant",
  "slashing": "CARBON.DamageSlashing",
};

// Damage Resistance Types
DND5E.damageResistanceTypes = mergeObject(duplicate(DND5E.damageTypes), {
});


/* -------------------------------------------- */

DND5E.distanceUnits = {
  "none": "CARBON.None",
  "self": "CARBON.DistSelf",
  "touch": "CARBON.DistTouch",
  "ft": "CARBON.DistFt",
  "mi": "CARBON.DistMi",
  "spec": "CARBON.Special",
  "any": "CARBON.DistAny"
};

/* -------------------------------------------- */


/**
 * Configure aspects of encumbrance calculation so that it could be configured by modules
 * @type {Object}
 */
DND5E.encumbrance = {
  currencyPerWeight: 0,
  strMultiplier: 5,
  vehicleWeightMultiplier: 2000 // 2000 lbs in a ton
};

/* -------------------------------------------- */

/**
 * This Object defines the types of single or area targets which can be applied
 * @type {Object}
 */
DND5E.targetTypes = {
  "none": "CARBON.None",
  "self": "CARBON.TargetSelf",
  "creature": "CARBON.TargetCreature",
  "ally": "CARBON.TargetAlly",
  "enemy": "CARBON.TargetEnemy",
  "object": "CARBON.TargetObject",
  "space": "CARBON.TargetSpace",
  "radius": "CARBON.TargetRadius",
  "sphere": "CARBON.TargetSphere",
  "cylinder": "CARBON.TargetCylinder",
  "cone": "CARBON.TargetCone",
  "square": "CARBON.TargetSquare",
  "cube": "CARBON.TargetCube",
  "line": "CARBON.TargetLine",
  "wall": "CARBON.TargetWall"
};


/* -------------------------------------------- */


/**
 * Map the subset of target types which produce a template area of effect
 * The keys are DND5E target types and the values are MeasuredTemplate shape types
 * @type {Object}
 */
DND5E.areaTargetTypes = {
  cone: "cone",
  cube: "rect",
  cylinder: "circle",
  line: "ray",
  radius: "circle",
  sphere: "circle",
  square: "rect",
  wall: "ray"
};


/* -------------------------------------------- */

// Healing Types
DND5E.healingTypes = {
  "healing": "CARBON.Healing",
  "temphp": "CARBON.HealingTemp"
};


/* -------------------------------------------- */


/**
 * Enumerate the denominations of hit dice which can apply to classes
 * @type {Array.<string>}
 */
DND5E.hitDieTypes = ["d6", "d8", "d10", "d12"];


/* -------------------------------------------- */

/**
 * Character senses options
 * @type {Object}
 */
DND5E.senses = {
  "bs": "CARBON.SenseBS",
  "dv": "CARBON.SenseDV",
  "ts": "CARBON.SenseTS",
  "tr": "CARBON.SenseTR"
};


/* -------------------------------------------- */

/**
 * The set of skill which can be trained
 * @type {Object}
 */
DND5E.skills = {
  "acr": "CARBON.SkillAcr",
  "ani": "CARBON.SkillAni",
  "bur": "CARBON.SkillBur",
  "com": "CARBON.SkillCom",
  "ath": "CARBON.SkillAth",
  "dec": "CARBON.SkillDec",
  "his": "CARBON.SkillHis",
  "ins": "CARBON.SkillIns",
  "itm": "CARBON.SkillItm",
  "inv": "CARBON.SkillInv",
  "med": "CARBON.SkillMed",
  "nat": "CARBON.SkillNat",
  "prc": "CARBON.SkillPrc",
  "prf": "CARBON.SkillPrf",
  "per": "CARBON.SkillPer",
  "rel": "CARBON.SkillRel",
  "slt": "CARBON.SkillSlt",
  "ste": "CARBON.SkillSte",
  "sur": "CARBON.SkillSur",
  "eng": "CARBON.SkillEng",
  "gam": "CARBON.SkillGam",
  "hac": "CARBON.SkillHac",
  "mec": "CARBON.SkillMec",
  "nav": "CARBON.SkillNav",
  "prs": "CARBON.SkillPrs",
  "rob": "CARBON.SkillRob",
  "smo": "CARBON.SkillSmo",
  "stw": "CARBON.SkillStw",
  "tra": "CARBON.SkillTra",
  "vai": "CARBON.SkillVai",
  "vla": "CARBON.SkillVla",
};


/* -------------------------------------------- */

DND5E.spellPreparationModes = {
  "always": "CARBON.SpellPrepAlways",
    "prepared": "CARBON.SpellPrepPrepared"
};

DND5E.spellUpcastModes = ["always", "pact", "prepared"];


DND5E.spellProgression = {
  "none": "CARBON.SpellNone",
  "full": "CARBON.SpellProgFull",
};

/* -------------------------------------------- */

/**
 * The available choices for how spell damage scaling may be computed
 * @type {Object}
 */
DND5E.spellScalingModes = {
  "none": "CARBON.SpellNone",
  "level": "CARBON.SpellLevel"
};

/* -------------------------------------------- */


/**
 * Define the set of types which a weapon item can take
 * @type {Object}
 */
DND5E.weaponTypes = {
  "melee": "CARBON.WeaponMelee",
  "pistol": "CARBON.WeaponPistol",
  "smg": "CARBON.WeaponSubmachineGun",
  "shot": "CARBON.WeaponShotgun",
  "ar": "CARBON.WeaponAssaultRifle",
  "sniper": "CARBON.WeaponSniperRifle",
  "cshot": "CARBON.WeaponCombatShotgun",
  "heavy": "CARBON.WeaponHeavy",
  "grenade": "CARBON.WeaponGrenade",

};


/* -------------------------------------------- */

/**
 * Define the set of weapon property flags which can exist on a weapon
 * @type {Object}
 */
DND5E.weaponProperties = {
  "amm": "CARBON.WeaponPropertiesAmm",
  "hvy": "CARBON.WeaponPropertiesHvy",
  "fin": "CARBON.WeaponPropertiesFin",
  "Spr": "CARBON.WeaponPropertiesSpr",
  "bio": "CARBON.WeaponPropertiesBio",
  "lgt": "CARBON.WeaponPropertiesLgt",
  "thr": "CARBON.WeaponPropertiesThr",
  "two": "CARBON.WeaponPropertiesTwo",
  "ver": "CARBON.WeaponPropertiesVer",
  "rng": "CARBON.WeaponPropertiesRng"
};


// Spell Components
DND5E.spellComponents = {
  "V": "CARBON.ComponentVerbal",
  "S": "CARBON.ComponentSomatic",
  "M": "CARBON.ComponentMaterial"
};

// Spell Schools
DND5E.spellSchools = {

};

// Spell Levels
DND5E.spellLevels = {
  0: "CARBON.SpellLevel0",
};

/**
 * Define the standard slot progression by character level.
 * The entries of this array represent the spell slot progression for a full spell-caster.
 * @type {Array[]}
 */
DND5E.SPELL_SLOT_TABLE = [
  [2],
  [3],
  [4, 2],
  [4, 3],
  [4, 3, 2],
  [4, 3, 3],
  [4, 3, 3, 1],
  [4, 3, 3, 2],
  [4, 3, 3, 3, 1],
  [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 2, 1, 1]
];

/* -------------------------------------------- */

// Polymorph options.
DND5E.polymorphSettings = {
  keepPhysical: 'CARBON.PolymorphKeepPhysical',
  keepMental: 'CARBON.PolymorphKeepMental',
  keepSaves: 'CARBON.PolymorphKeepSaves',
  keepSkills: 'CARBON.PolymorphKeepSkills',
  mergeSaves: 'CARBON.PolymorphMergeSaves',
  mergeSkills: 'CARBON.PolymorphMergeSkills',
  keepClass: 'CARBON.PolymorphKeepClass',
  keepFeats: 'CARBON.PolymorphKeepFeats',
  keepSpells: 'CARBON.PolymorphKeepSpells',
  keepItems: 'CARBON.PolymorphKeepItems',
  keepBio: 'CARBON.PolymorphKeepBio',
  keepVision: 'CARBON.PolymorphKeepVision'
};

/* -------------------------------------------- */

/**
 * Skill, ability, and tool proficiency levels
 * Each level provides a proficiency multiplier
 * @type {Object}
 */
DND5E.proficiencyLevels = {
  0: "CARBON.NotProficient",
  1: "CARBON.Proficient",
  0.5: "CARBON.HalfProficient",
  2: "CARBON.Expertise"
};

/* -------------------------------------------- */

/**
 * The amount of cover provided by an object.
 * In cases where multiple pieces of cover are
 * in play, we take the highest value.
 */
DND5E.cover = {
  0: 'CARBON.None',
  .5: 'CARBON.CoverHalf',
  .75: 'CARBON.CoverThreeQuarters',
  1: 'CARBON.CoverTotal'
};

/* -------------------------------------------- */


// Condition Types
DND5E.conditionTypes = {
  "blinded": "CARBON.ConBlinded",
  "charmed": "CARBON.ConCharmed",
  "deafened": "CARBON.ConDeafened",
  "diseased": "CARBON.ConDiseased",
  "exhaustion": "CARBON.ConExhaustion",
  "frightened": "CARBON.ConFrightened",
  "grappled": "CARBON.ConGrappled",
  "incapacitated": "CARBON.ConIncapacitated",
  "invisible": "CARBON.ConInvisible",
  "paralyzed": "CARBON.ConParalyzed",
  "petrified": "CARBON.ConPetrified",
  "poisoned": "CARBON.ConPoisoned",
  "prone": "CARBON.ConProne",
  "restrained": "CARBON.ConRestrained",
  "stunned": "CARBON.ConStunned",
  "unconscious": "CARBON.ConUnconscious"
};

// Languages
DND5E.languages = {
  "afrikaans": "CARBON.LanguagesAfrikaans",
  "arabic": "CARBON.LanguagesArabic",
  "cantonese": "CARBON.LanguagesCantonese",
  "english": "CARBON.LanguagesEnglish",
  "french": "CARBON.LanguagesFrench",
  "german": "CARBON.LanguagesGerman",
  "hindi": "CARBON.LanguagesHindi",
  "japanese": "CARBON.LanguagesJapanese",
  "korean": "CARBON.LanguagesKorean",
  "mandarin": "CARBON.LanguagesMandarin",
  "polish": "CARBON.LanguagesPolish",
  "russian": "CARBON.LanguagesRussian",
  "spanish": "CARBON.LanguagesSpanish",
  "tagalog": "CARBON.LanguagesTagalog",
  "vietnamese": "CARBON.LanguagesVietnamese"
};

// Character Level XP Requirements
DND5E.CHARACTER_EXP_LEVELS =  [
  0, 400, 1300, 2700, 6500, 14000, 23000, 34000, 48000, 64000
];

// Challenge Rating XP Levels
DND5E.CR_EXP_LEVELS = [
  10, 25, 50, 100, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900, 7200
];

// Configure Optional Character Flags
DND5E.characterFlags = {
  "powerfulBuild": {
    name: "CARBON.FlagsPowerfulBuild",
    hint: "CARBON.FlagsPowerfulBuildHint",
    section: "Racial Traits",
    type: Boolean
  },
  "savageAttacks": {
    name: "CARBON.FlagsSavageAttacks",
    hint: "CARBON.FlagsSavageAttacksHint",
    section: "Racial Traits",
    type: Boolean
  },
  "elvenAccuracy": {
    name: "CARBON.FlagsElvenAccuracy",
    hint: "CARBON.FlagsElvenAccuracyHint",
    section: "Racial Traits",
    type: Boolean
  },
  "halflingLucky": {
    name: "CARBON.FlagsHalflingLucky",
    hint: "CARBON.FlagsHalflingLuckyHint",
    section: "Racial Traits",
    type: Boolean
  },
  "initiativeAdv": {
    name: "CARBON.FlagsInitiativeAdv",
    hint: "CARBON.FlagsInitiativeAdvHint",
    section: "Feats",
    type: Boolean
  },
  "initiativeAlert": {
    name: "CARBON.FlagsAlert",
    hint: "CARBON.FlagsAlertHint",
    section: "Feats",
    type: Boolean
  },
  "jackOfAllTrades": {
    name: "CARBON.FlagsJOAT",
    hint: "CARBON.FlagsJOATHint",
    section: "Feats",
    type: Boolean
  },
  "observantFeat": {
    name: "CARBON.FlagsObservant",
    hint: "CARBON.FlagsObservantHint",
    skills: ['prc','inv'],
    section: "Feats",
    type: Boolean
  },
  "reliableTalent": {
    name: "CARBON.FlagsReliableTalent",
    hint: "CARBON.FlagsReliableTalentHint",
    section: "Feats",
    type: Boolean
  },
  "remarkableAthlete": {
    name: "CARBON.FlagsRemarkableAthlete",
    hint: "CARBON.FlagsRemarkableAthleteHint",
    abilities: ['str','dex','con'],
    section: "Feats",
    type: Boolean
  },
  "weaponCriticalThreshold": {
    name: "CARBON.FlagsCritThreshold",
    hint: "CARBON.FlagsCritThresholdHint",
    section: "Feats",
    type: Number,
    placeholder: 20
  }
};

// Configure allowed status flags
DND5E.allowedActorFlags = [
  "isPolymorphed", "originalActor"
].concat(Object.keys(DND5E.characterFlags));
