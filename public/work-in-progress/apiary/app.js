const app = document.querySelector('#chromeApp');
const identifierPanel = app.querySelector('[data-panel-view="identifier"]');
const dockPanel = app.querySelector('[data-panel-view="dock"]');
const dockContent = app.querySelector('[data-dock-content]');
const taskOverlay = app.querySelector('[data-task-overlay]');
const meetingPanel = app.querySelector('[data-meeting-panel]');
const minimizedTray = app.querySelector('[data-minimized]');
const toast = app.querySelector('[data-toast]');
const thread = app.querySelector('[data-message-thread]');
const threadContext = app.querySelector('[data-thread-context]');
const messageForm = app.querySelector('[data-message-form]');
const messageInput = app.querySelector('[data-message-input]');

const icon = (name) => `<svg aria-hidden="true"><use href="#i-${name}"/></svg>`;

const tasks = {
  onboarding: {
    type: 'Product Design',
    title: 'Build invitation flow',
    stage: 'Build',
    path: 'Kiduna Dev · Apiary',
    part: 'Review the interaction flow by 3:00 PM.',
    outcome: 'An invited Source can enter Apiary with explicit scope and Permission.',
    now: 'Engineering is implementing the confirmation step.',
    people: 'Requested by David · Lead Aashik · Reviewing Morgan',
    primary: 'Start review'
  },
  attention: {
    type: 'Governance Design',
    title: 'Define attention rules',
    stage: 'Build',
    path: 'Kiduna Dev · Apiary',
    part: 'Resolve two interruption thresholds.',
    outcome: 'Action-required changes interrupt; informational changes accumulate.',
    now: 'The draft policy has two unresolved thresholds.',
    people: 'Requested by David · Lead Morgan · Consulting Ki',
    primary: 'Resolve thresholds'
  },
  sigils: {
    type: 'Visual System',
    title: 'Complete functional sigils',
    stage: 'Test',
    path: 'Kiduna Dev · Apiary',
    part: 'Validate the remaining 12 exports.',
    outcome: 'Every functional control uses a distinct, reusable enamel sigil.',
    now: 'Twenty-eight exports passed; twelve need final contrast checks.',
    people: 'Requested by Morgan · Lead Jeya · Reviewing David',
    primary: 'Open validation'
  },
  viewport: {
    type: 'Interaction Design',
    title: 'Review viewport',
    stage: 'Rehearse',
    path: 'Kiduna Dev · Apiary',
    part: 'Add comments to the desktop review.',
    outcome: 'The viewport preserves the Scene while Chrome remains usable.',
    now: 'Desktop rehearsal is ready for review.',
    people: 'Requested by Jeya · Lead Aashik · Reviewing Morgan',
    primary: 'Start review'
  },
  governance: {
    type: 'Realm Governance',
    title: 'Confirm governance model',
    stage: 'Release',
    path: 'Kiduna Dev · Apiary',
    part: 'Approve the current proposal or request changes.',
    outcome: 'Apiary has an explicit decision process and recoverable authority changes.',
    now: 'The proposal is awaiting one final approval.',
    people: 'Proposed by David · Steward Council · Reviewing Morgan',
    primary: 'Review proposal'
  },
  new: {
    type: 'New Task',
    title: 'Create a Task',
    stage: 'Draft',
    path: 'Kiduna Dev · Apiary',
    part: 'Describe the intended outcome or continue the brief with Ki.',
    outcome: 'A Task is created only after the outcome, people, and authority are confirmed.',
    now: 'No Task has been created. This is a local draft.',
    people: 'Author Morgan · People not yet selected',
    primary: 'Continue with Ki'
  }
};

const conversations = {
  ki: {
    context: 'Context · Apiary',
    message: 'I’m available with the current Scene and Realm context. Nothing is changed unless you confirm an Action.'
  },
  aashik: {
    context: 'Ally · Aashik · Build invitation flow',
    message: 'The confirmation step is ready. I need your review of the scope language before 3:00 PM.'
  },
  attention: {
    context: 'Task Actor · Define attention rules',
    message: 'Two interruption thresholds remain unresolved. I opened the related Task so you can inspect them in context.',
    task: 'attention'
  },
  jeya: {
    context: 'Ally · Jeya · Review viewport',
    message: 'The desktop rehearsal is ready. I marked the two places where the Chrome overlaps the canvas.'
  },
  sigils: {
    context: 'Task Actor · Complete functional sigils',
    message: 'Twelve exports still need contrast validation. I opened the related Task.',
    task: 'sigils'
  }
};

const dockPanels = {
  projects: {
    eyebrow: 'Task scope',
    title: 'Projects',
    icon: 'project',
    context: 'Projects available from the Task dock',
    note: 'Selecting a Project changes the Task scope. It does not change the current Scene.',
    options: [
      ['project', 'Apiary', 'Current Project', 'current'],
      ['project', 'Kiduna Mobile', '6 active Tasks', '6'],
      ['project', 'Sigil System', '12 active Tasks', '12'],
      ['project', 'Royals & Rogues', '4 active Tasks', '4']
    ]
  },
  types: {
    eyebrow: 'Task scope',
    title: 'Task types',
    icon: 'types',
    context: 'Task types in Apiary and across Projects',
    scope: true,
    note: 'The scope switch applies only to this panel.',
    options: [
      ['types', 'Product Design', '3 Tasks', '3'],
      ['types', 'Engineering', '7 Tasks', '7'],
      ['types', 'Governance', '2 Tasks', '2'],
      ['types', 'Visual System', '4 Tasks', '4'],
      ['types', 'Research', '1 Task', '1']
    ]
  },
  mine: {
    eyebrow: 'My Task responsibilities',
    title: 'My tasks',
    icon: 'my-tasks',
    context: 'Tasks where Morgan has a responsibility',
    note: 'A Task appears here only when the current Source has a Task responsibility.',
    options: [
      ['alert', 'Do now', '2 Tasks require action', '2'],
      ['check', 'Review', '1 Task awaiting review', '1'],
      ['clock', 'Waiting', '3 Tasks blocked elsewhere', '3'],
      ['people', 'Following', '6 followed Tasks', '6']
    ]
  },
  active: {
    eyebrow: 'Across Projects',
    title: 'Active tasks',
    icon: 'active',
    context: 'Active Tasks sorted across Projects',
    scope: true,
    scopeLabels: ['This Project', 'All Projects'],
    note: 'Sorting changes the order only. It does not alter Attention settings.',
    options: [
      ['active', 'Most activity', '41 changes today', '41'],
      ['clock', 'Recently updated', 'Last 24 hours', '24h'],
      ['alert', 'At risk', '3 Tasks need attention', '3'],
      ['sort', 'By stage', 'Form · Build · Rehearse · Release', '4']
    ]
  },
  calendar: {
    eyebrow: 'Commitments',
    title: 'Calendar',
    icon: 'calendar',
    context: 'Task dates, reviews, releases, and meetings',
    note: 'Calendar items remain linked to their Tasks and Projects.',
    options: [
      ['clock', 'Today', 'Review invitation flow · 3:00 PM', '2'],
      ['calendar', 'This week', '8 commitments', '8'],
      ['check', 'Reviews', '3 scheduled reviews', '3'],
      ['active', 'Releases', '1 scheduled release', '1'],
      ['meeting', 'Meetings', '2 meetings', '2']
    ]
  }
};

let currentTask = 'onboarding';
let currentConversation = 'ki';
let toastTimer;

function showToast(text) {
  clearTimeout(toastTimer);
  toast.textContent = text;
  toast.hidden = false;
  toastTimer = window.setTimeout(() => { toast.hidden = true; }, 2600);
}

function closeTransient(except = '') {
  if (except !== 'identifier') closePanel(identifierPanel);
  if (except !== 'dock') closePanel(dockPanel);
  if (except !== 'task') closeTask();
  if (except !== 'meeting') meetingPanel.hidden = true;
}

function openIdentifier() {
  closeTransient('identifier');
  identifierPanel.hidden = false;
  app.classList.add('identifier-open');
  app.querySelector('[data-action="open-identifier"]').setAttribute('aria-expanded', 'true');
}

function closePanel(panel) {
  if (!panel) return;
  panel.hidden = true;
  panel.classList.remove('is-expanded');
  if (panel === identifierPanel) {
    app.classList.remove('identifier-open');
    app.querySelector('[data-action="open-identifier"]').setAttribute('aria-expanded', 'false');
  }
  if (panel === dockPanel) {
    app.querySelectorAll('[data-action="open-dock"]').forEach((button) => button.setAttribute('aria-expanded', 'false'));
  }
}

function openDock(name) {
  const panel = dockPanels[name];
  if (!panel) return;
  closeTransient('dock');
  dockPanel.hidden = false;
  dockPanel.dataset.currentPanel = name;
  app.querySelectorAll('[data-action="open-dock"]').forEach((button) => {
    button.setAttribute('aria-expanded', String(button.dataset.panel === name));
  });

  const scopeLabels = panel.scopeLabels || ['This Project', 'All Projects'];
  const scope = panel.scope ? `
    <div class="scope-switch" aria-label="Task scope">
      <button type="button" data-action="choose-scope" aria-pressed="true">${scopeLabels[0]}</button>
      <button type="button" data-action="choose-scope" aria-pressed="false">${scopeLabels[1]}</button>
    </div>` : '';

  const options = panel.options.map(([optionIcon, title, detail, badge], index) => `
    <div class="panel-option" data-option="${title}">
      <button class="option-main" type="button" data-action="panel-select" aria-checked="${name === 'projects' && index === 0}">
        ${icon(optionIcon)}
        <span><strong>${title}</strong><small>${detail}</small></span>
        <b>${badge}</b>
      </button>
      <button class="send-context" type="button" data-action="send-to-ki" data-context="${panel.title}: ${title} — ${detail}" aria-label="Send ${title} to Ki">${icon('arrow-right')}<span>Ki</span></button>
    </div>`).join('');

  dockContent.innerHTML = `
    <div class="dock-head">
      ${icon(panel.icon)}
      <div><small>${panel.eyebrow}</small><h3>${panel.title}</h3></div>
      <button class="send-context" type="button" data-action="send-to-ki" data-context="${panel.context}" aria-label="Send ${panel.title} to Ki">${icon('arrow-right')}<span>Ki</span></button>
    </div>
    ${scope}
    <div class="panel-options">${options}</div>
    <p class="dock-note">${panel.note}</p>`;
}

function openTask(taskId) {
  const task = tasks[taskId];
  if (!task) return;
  closePanel(identifierPanel);
  closePanel(dockPanel);
  meetingPanel.hidden = true;
  currentTask = taskId;
  taskOverlay.querySelector('[data-task-type]').textContent = task.type;
  taskOverlay.querySelector('[data-task-title]').textContent = task.title;
  taskOverlay.querySelector('[data-task-stage]').textContent = task.stage;
  taskOverlay.querySelector('[data-task-path]').textContent = task.path;
  taskOverlay.querySelector('[data-task-part]').textContent = task.part;
  taskOverlay.querySelector('[data-task-outcome]').textContent = task.outcome;
  taskOverlay.querySelector('[data-task-now]').textContent = task.now;
  taskOverlay.querySelector('[data-task-people]').textContent = task.people;
  taskOverlay.querySelector('[data-task-action="review"]').textContent = task.primary;
  taskOverlay.hidden = false;
  app.querySelectorAll('.task-bee').forEach((bee) => bee.classList.toggle('is-active', bee.dataset.task === taskId));
}

function closeTask() {
  taskOverlay.hidden = true;
  app.querySelectorAll('.task-bee').forEach((bee) => bee.classList.remove('is-active'));
}

function addMessage(text, direction = 'outgoing') {
  const message = document.createElement('div');
  message.className = `message ${direction}`;
  message.textContent = text;
  thread.append(message);
  thread.scrollTop = thread.scrollHeight;
}

function selectConversation(id) {
  const conversation = conversations[id];
  if (!conversation) return;
  currentConversation = id;
  app.querySelectorAll('[data-conversation]').forEach((button) => button.classList.toggle('is-selected', button.dataset.conversation === id));
  thread.querySelectorAll('.message').forEach((message) => message.remove());
  threadContext.textContent = conversation.context;
  addMessage(conversation.message, 'incoming');
  if (conversation.task) openTask(conversation.task);
}

function sendToKi(context) {
  const cleanContext = context || 'Current Apiary context';
  selectConversation('ki');
  addMessage(`Sent from Chrome · ${cleanContext}`, 'outgoing');
  window.setTimeout(() => addMessage('Context received. Tell me what you want to understand, compare, or prepare.', 'incoming'), 220);
  showToast('Context sent to Ki');
}

function minimizePanel(panel) {
  if (!panel) return;
  const key = panel === identifierPanel ? 'identifier' : 'dock';
  const label = key === 'identifier' ? 'Scene Identifier' : dockPanels[dockPanel.dataset.currentPanel]?.title || 'Task controls';
  closePanel(panel);
  if (!minimizedTray.querySelector(`[data-restore="${key}"]`)) {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.action = 'restore-panel';
    button.dataset.restore = key;
    button.innerHTML = `<img src="assets/sigils/${key === 'identifier' ? 'bee' : 'project'}.png" alt=""><span>${label}</span>`;
    minimizedTray.append(button);
  }
  minimizedTray.hidden = false;
}

function restorePanel(key) {
  const token = minimizedTray.querySelector(`[data-restore="${key}"]`);
  if (token) token.remove();
  minimizedTray.hidden = !minimizedTray.children.length;
  if (key === 'identifier') openIdentifier();
  else openDock(dockPanel.dataset.currentPanel || 'projects');
}

function prepareMeeting() {
  const withWhom = meetingPanel.querySelector('[data-meeting-with]').value;
  const selectedTime = meetingPanel.querySelector('[data-action="select-time"][aria-pressed="true"]')?.textContent || 'No time selected';
  sendToKi(`Meeting draft with ${withWhom}; ${selectedTime}; context Apiary`);
  meetingPanel.hidden = true;
  showToast('Meeting draft prepared. No invitation sent.');
}

app.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-action]');
  if (!button || !app.contains(button)) return;
  const action = button.dataset.action;

  if (action === 'open-identifier') openIdentifier();
  if (action === 'close-panel') closePanel(button.closest('.chrome-panel'));
  if (action === 'minimize-panel') minimizePanel(button.closest('.chrome-panel'));
  if (action === 'expand-panel') button.closest('.chrome-panel')?.classList.toggle('is-expanded');
  if (action === 'restore-panel') restorePanel(button.dataset.restore);

  if (action === 'toggle-history') {
    const menu = app.querySelector('[data-history-menu]');
    menu.hidden = !menu.hidden;
    button.setAttribute('aria-expanded', String(!menu.hidden));
  }
  if (action === 'toggle-inspect') {
    const content = app.querySelector('[data-inspect-content]');
    content.hidden = !content.hidden;
    button.setAttribute('aria-expanded', String(!content.hidden));
  }
  if (action === 'navigate') showToast(`Navigation target · ${button.dataset.destination}`);

  if (action === 'open-dock') openDock(button.dataset.panel);
  if (action === 'new-task') openTask('new');
  if (action === 'panel-select') {
    button.closest('.panel-options')?.querySelectorAll('[data-action="panel-select"]').forEach((option) => option.setAttribute('aria-checked', String(option === button)));
    showToast(`${button.querySelector('strong')?.textContent || 'Selection'} selected`);
  }
  if (action === 'choose-scope') {
    button.parentElement.querySelectorAll('button').forEach((scopeButton) => scopeButton.setAttribute('aria-pressed', String(scopeButton === button)));
    showToast(`Task scope · ${button.textContent}`);
  }

  if (action === 'open-task') openTask(button.dataset.task);
  if (action === 'close-task') closeTask();
  if (action === 'send-task-to-ki') sendToKi(`Task: ${tasks[currentTask].title} — ${tasks[currentTask].stage}`);
  if (action === 'task-action') showToast(`${button.textContent} · prototype response`);

  if (action === 'send-to-ki') {
    let context = button.dataset.context;
    if (context === 'Current Task outcome') context = `${tasks[currentTask].title} outcome: ${tasks[currentTask].outcome}`;
    if (context === 'Current Task status') context = `${tasks[currentTask].title} status: ${tasks[currentTask].now}`;
    if (context === 'People on current Task') context = `${tasks[currentTask].title} people: ${tasks[currentTask].people}`;
    sendToKi(context);
  }
  if (action === 'send-current-to-ki') sendToKi('Current Scene: Apiary; Realm: Kiduna Dev; Realm Type: Project');

  if (action === 'comms-tab') {
    const tab = button.dataset.tab;
    app.querySelectorAll('[data-action="comms-tab"]').forEach((tabButton) => tabButton.setAttribute('aria-selected', String(tabButton === button)));
    app.querySelectorAll('[data-conversation]').forEach((conversationButton) => {
      conversationButton.hidden = tab !== 'all' && conversationButton.dataset.kind !== tab;
    });
  }
  if (action === 'select-conversation') selectConversation(button.dataset.conversation);
  if (action === 'voice') showToast('Microphone control · prototype only');

  if (action === 'open-meeting') {
    closePanel(identifierPanel);
    closePanel(dockPanel);
    closeTask();
    meetingPanel.hidden = false;
  }
  if (action === 'close-meeting') meetingPanel.hidden = true;
  if (action === 'select-time') {
    button.parentElement.querySelectorAll('button').forEach((timeButton) => timeButton.setAttribute('aria-pressed', String(timeButton === button)));
  }
  if (action === 'prepare-meeting') prepareMeeting();
});

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = messageInput.value.trim();
  if (!value) return;
  addMessage(value, 'outgoing');
  messageInput.value = '';
  const reply = currentConversation === 'ki'
    ? 'Received. I can work with the current Chrome context when you are ready.'
    : 'Message added to this prototype conversation.';
  window.setTimeout(() => addMessage(reply, 'incoming'), 260);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeTransient();
  if ((event.metaKey || event.ctrlKey) && event.code === 'Space') {
    event.preventDefault();
    messageInput.focus();
  }
});

const capture = new URLSearchParams(window.location.search).get('capture');
if (capture) {
  document.body.classList.add('capture-mode');
  if (capture === 'identifier') openIdentifier();
  if (capture === 'projects') openDock('projects');
  if (capture === 'task') openTask('attention');
}
