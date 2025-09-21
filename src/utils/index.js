import { commandMap } from "../constant";

export const formatExperience = (experiences) => {
    return experiences
        .map(exp => {
            let responsibilities = exp.responsibilities.map(r => `• ${r}`).join('<br>');
            return `
<div class="mb-2">
<b class="text-primary">${exp.role}</b> at <b class="text-primary">${exp.company}</b> (<span class="text-muted-foreground">${exp.date}</span>)<br>
<span class="text-sm text-muted-foreground">Location: ${exp.location}</span><br>
<span class="text-sm font-semibold text-foreground">Responsibilities:</span><br>
<span class="text-sm">${responsibilities}</span>
</div>`;
        })
        .join('');
};

export const formatHelp = (commands) => {
    let cmdList = Object.entries(commands).map(([cmd, desc]) => `<b class="text-primary">${cmd}</b> - ${desc}`).join('<br>');
    return `
<div class="mb-2">
<b class="text-primary">Available commands</b>:<br>
<span class="text-sm">${cmdList}</span>
</div>`;
};

export const formatProjects = (projects) => {
    return projects
        .map(proj => {
            let features = proj.features.map(f => `• ${f}`).join('<br>');
            return `
<div class="mb-2">
<b class="text-primary">${proj.name}</b><br>
<span class="text-sm text-muted-foreground">Description: ${proj.description}</span><br>
<span class="text-sm font-semibold text-foreground">Features:</span><br>
<span class="text-sm">${features}</span><br>
<span class="text-sm">Link: </span><a href="${proj.link}" target="_blank" rel="noopener noreferrer" class="underline text-primary hover:text-primary/80">${proj.link}</a>
</div>`;
        })
        .join('');
};

export const formatEducation = (edu) => {
    return `
<div class="mb-2">
<b class="text-primary">${edu.degree}</b> in <span class="text-muted-foreground">${edu.field}</span><br>
<span class="text-sm text-muted-foreground">${edu.institution}, ${edu.year}</span><br>
<span class="text-sm text-muted-foreground">GPA: ${edu.gpa}</span>
</div>`.trim();
};

export const formatSkills = (skills) => {
    return `
<div class="mb-2">
<b class="text-primary">Languages:</b> <span class="text-muted-foreground">${skills.languages.join(', ')}</span><br>
<b class="text-primary">Frontend:</b> <span class="text-muted-foreground">${skills.frontend.join(', ')}</span><br>
<b class="text-primary">Backend:</b> <span class="text-muted-foreground">${skills.backend.join(', ')}</span><br>
<b class="text-primary">Databases:</b> <span class="text-muted-foreground">${skills.databases.join(', ')}</span><br>
<b class="text-primary">Tools & DevOps:</b> <span class="text-muted-foreground">${skills.tools_devops.join(', ')}</span>
</div>`.trim();
};


export const tokenizeHtml = (html) => {
    const tokens = [];
    let i = 0;
    const len = html.length;

    while (i < len) {
      if (html[i] === '<') {
        let tagEnd = html.indexOf('>', i);
        if (tagEnd === -1) tagEnd = len;
        const tag = html.substring(i, tagEnd + 1);
        tokens.push({ type: 'tag', content: tag });
        i = tagEnd + 1;
      } else {
        let nextTag = html.indexOf('<', i);
        if (nextTag === -1) nextTag = len;
        const textContent = html.substring(i, nextTag);
        if (textContent.trim()) {
          tokens.push({ type: 'text', content: textContent });
        }
        i = nextTag;
      }
    }
    return tokens;
  };


  export const initialHistory = [
    { command: '', output: `<strong class="text-primary">Welcome to Vaibhav Sharma's Portfolio Terminal!</strong><br>Type 'help' to see available commands.`, isTyping: true }
  ];

  export const noCommandFoundOutput = (command) => `<span class="text-destructive">Command not found: ${command}. Type 'help' to see available commands.</span>`;
  
  

  export const commandHandlers = {
    [commandMap.EXPERIENCE]: (data) => formatExperience(data),
    [commandMap.PROJECTS]: (data) => formatProjects(data),
    [commandMap.EDUCATION]: (data) => formatEducation(data),
    [commandMap.SKILLS]: (data) => formatSkills(data),
    [commandMap.ABOUT]: (data) => data.replace(/\n/g, '<br/>'), // Convert newlines to <br> for HTML consistency
  };