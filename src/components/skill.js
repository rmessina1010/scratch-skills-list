import { useState, useCallback, useEffect } from "react";
const Skill = function (props) {
    const exists = (props.indx !== undefined);
    const deflt = { name: '', lvl: 0, exp: 0 };
    const [theSkill, setSkill] = useState(
        exists ? { name: props.name, lvl: props.lvl, id: props.id, exp: props.exp }
            : { ...deflt }
    );

    const handleBlur = function () {
        if (exists && typeof props.update === 'function') { props.update(theSkill, props.indx) }
    }

    useEffect(() => console.log('rendering Skill[child]'), [theSkill]);

    const handleChange = function (event) {
        const localSkill = { ...theSkill };
        localSkill[event.target.name] = event.target.value;
        setSkill(localSkill);
        if (event.target.name === 'lvl') { handleBlur(true) }
    }
    const CustomTag = exists ? `td` : `label`;
    const CustomTag2 = exists ? `td` : `span`;
    return (<>
        <CustomTag2>{theSkill.id}</CustomTag2>
        <CustomTag>{exists ? '' : 'Skill:'} <input name="name" onBlur={handleBlur} onChange={handleChange} value={theSkill.name} /></CustomTag>
        <CustomTag>{exists ? '' : 'Level:'}<input name="lvl" type="range" min={1} max={5} onBlur={handleBlur} onChange={handleChange} value={theSkill.lvl} /></CustomTag>
        <CustomTag>{exists ? '' : 'Experience:'}<input name="exp" type="number" min={0} onBlur={handleBlur} onChange={handleChange} value={theSkill.exp} /></CustomTag>
        <CustomTag2><button type="button" onClick={() => { props.act(exists ? props.indx : theSkill); if (!exists) { setSkill({ ...deflt }) } }}> {exists ? "Remove" : "Add"}</button></CustomTag2>
    </>)
}

const SkillSet = function (props) {
    const [skillSet, setSkillSet] = useState({ skills: props.skills ?? [], nextID: props.skills ? props.skills.length : 0 });
    const [redStyle, setRedStyle] = useState(false);

    const addSkill = useCallback(
        (newSkill) => {
            newSkill.id = skillSet.nextID;
            skillSet.skills.push(newSkill);
            setSkillSet({
                skills: skillSet.skills,
                nextID: skillSet.nextID + 1
            })
        },
        [skillSet]
    );
    const removeSkill = useCallback(
        (indx) => {
            skillSet.skills.splice(indx, 1);
            setSkillSet({
                skills: skillSet.skills,
                nextID: skillSet.nextID
            })
        },
        [skillSet]
    );
    const updateSkill = useCallback(
        (newSkill, indx) => {
            if (JSON.stringify(newSkill) === JSON.stringify(skillSet.skills[indx])) { return; }
            skillSet.skills[indx] = newSkill;
            setSkillSet({
                skills: skillSet.skills,
                nextID: skillSet.nextID
            })
        },
        [skillSet]
    );

    useEffect(() => console.log('rendering SkillSet', skillSet), [skillSet, redStyle]);

    const someStyle = {
        color: redStyle ? '#f00' : '#000'
    }

    return (
        <form >
            <h3>Skill List for:{props.name}</h3>
            <div>
                <Skill uid={skillSet.nextID} act={addSkill} />
                <button type="button" onClick={() => setRedStyle(!redStyle)}>Go Red</button>
            </div>
            <table style={someStyle}>
                <thead><tr>
                    <th>ID</th>
                    <th>Skill</th>
                    <th>Level</th>
                    <th>Experience</th>
                    <th>Action</th>
                </tr></thead>
                {skillSet.skills.map((skill, i) => <tr key={skill.id}><Skill {...skill} act={removeSkill} indx={i} update={updateSkill} /></tr>)}
            </table>
        </form>);
}

export default SkillSet;


