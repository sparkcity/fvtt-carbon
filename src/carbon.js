import Actor5e from "/systems/dnd5e/module/actor/entity.js";
import { DND5E } from '/systems/dnd5e/module/config.js';
import CompactBeyond5eSheet from "../../../modules/compact-beyond-5e-sheet/foundryvtt-compactBeyond5eSheet.js"

//changing abilities to system abilities
DND5E.abilities["wis"] = "Technology";
DND5E.abilities["cha"] = "People";
DND5E.abilityAbbreviations["wis"] = "Tec";
DND5E.abilityAbbreviations["cha"] = "Peo";
//changing skills to system skills
DND5E.skills["ani"] = "Computing";
DND5E.skills["arc"] = "Engineering";
DND5E.skills["bur"] = "Bureaucracy";
DND5E.skills["gmb"] = "Gambling";
DND5E.skills["ins"] = "Hacking";
DND5E.skills["nat"] = "Mechanics";
DND5E.skills["nvg"] = "Navigation";
DND5E.skills["pre"] = "Presence";
DND5E.skills["sur"] = "Robotics";
DND5E.skills["stw"] = "Streetwise";
DND5E.skills["trk"] = "Tracking";
DND5E.skills["var"] = "Vehicles (Aircraft)";
DND5E.skills["vla"] = "Vehicles (Land)";
DND5E.skills["smo"] = "Sense Motive";

//Adding relevant skills to npc and character sheets
const prep = Actor5e.prototype.prepareBaseData;	
function extendActorData() {
	if(this.data.type === "npc" || this.data.type === "character") {
		const skl = this.data.data.skills;
    skl["bur"] = skl["bur"] || {value: 0, ability: "cha"};
		skl["gmb"] = skl["gmb"] || {value: 0, ability: "int"};
		skl["nvg"] = skl["nvg"] || {value: 0, ability: "int"};
		skl["pre"] = skl["pre"] || {value: 0, ability: "cha"};
		skl["smo"] = skl["smo"] || {value: 0, ability: "cha"};
		skl["stw"] = skl["stw"] || {value: 0, ability: "int"};
    skl["trk"] = skl["trk"] || {value: 0, ability: "int"};
    skl["var"] = skl["var"] || {value: 0, ability: "wis"};
    skl["vla"] = skl["vla"] || {value: 0, ability: "dex"};
	}
	return prep.call(this);
}
Actor5e.prototype.prepareBaseData = extendActorData;

//Registering default sheet
  class CarbonCompactSheet extends CompactBeyond5eSheet {
    static get defaultOptions() {
        const options = super.defaultOptions;
        options.classes.push('carboncompact');
        return options;
    }
  }
  Actors.registerSheet("dnd5e", CarbonCompactSheet, {
    types: ["character"],
    makeDefault: true
  });

//FOR EDITING DEFAULT CHARACTER SHEET
Hooks.on("renderActorSheet", (app, html, data) => {
	const counters = html.find("div.counters");
	const flags = data.actor.flags.carbon || {};
	counters.append(`
	<div class="counter flexrow corpInf">
    <h4>Corporate Influence</h4>
    <div class="counter-value">
      <input type="text" name="flags.carbon.corpInf" placeholder="0" value="${flags.corpInf ?? 0}" data-dtype="Number"/>
    </div>
  </div>
  
	<div class="counter flexrow streetInf">
    <h4>Street Influence</h4>
    <div class="counter-value">
      <input type="text" name="flags.carbon.streetInf" placeholder="0" value="${flags.streetInf ?? 0}" data-dtype="Number"/>
    </div>
  </div>
  
	<div class="counter flexrow bloodTox">
    <h4>Blood Toxicity</h4>
    <div class="counter-value">
      <input type="text" name="flags.carbon.bloodTox" placeholder="0" value="${flags.bloodTox ?? 0}" data-dtype="Number"/>
    </div>
	</div>
  `);
});