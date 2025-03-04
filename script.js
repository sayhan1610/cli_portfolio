document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.getElementById('terminal');
    const outputContainer = document.getElementById('output');
    const inputContainer = document.getElementById('input-container');
    const inputField = document.getElementById('input');

    const routes = {
        home: 'home',
        about: 'about',
        experience: 'experience',
        education: 'education',
        skills: 'skills',
        languages: 'languages',
        projects: 'projects',
        gallery: 'gallery',
        contact: 'contact',
        help: 'help',
        clear: 'clear',
    };

    let commandHistory = [];
    let historyIndex = -1;

    const renderHomePage = () => {
        appendOutput(`
Welcome to My Terminal Portfolio!
  _      _      _ 
>(.)__ <(.)__ =(.)__
 (___/  (___/  (___/

Type 'help' to see all available commands.
Type 'clear' to clear the terminal.
        `);
    };

    const renderHelp = () => {
        appendOutput(`
Available Commands:
- 🤓 no-geek: Visit a GUI version of the portfolio.
- 🏡 home: Go back to the main menu.
- ℹ️ about: Learn more about me.
- ♟️ experience: See my experience.
- 📝 education: See my educational background.
- 📊 skills: See my skills.
- 🌐 languages: See the languages I know.
- 🧑‍🔬 projects: Explore my GitHub projects.
- 🖼️ gallery: View the image gallery.
- 📞 contact: Get in touch with me.
- 🚫 clear: Clear the terminal screen.
- 💁‍♂️ help: Show this help menu.
        `);
    };

    const fetchDataAndRender = async (page) => {
        try {
            const response = await fetch(`/pages/${page}.json`);
            const data = await response.json();
            appendOutput(data.content.join('\n'));
        } catch (error) {
            appendOutput(`Error loading the ${page} page.`);
        }
    };

    const appendOutput = (text) => {
        const commandOutput = document.createElement('div');
        commandOutput.textContent = text;
        outputContainer.appendChild(commandOutput);
        terminal.appendChild(inputContainer);
        inputField.focus();
    };

    const appendCommand = (command) => {
        const commandLine = document.createElement('div');
        commandLine.innerHTML = `<span class="prompt">root@sayhanrahman:~$</span> ${command}`;
        outputContainer.appendChild(commandLine);
    };

    inputField.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const command = inputField.value.trim().toLowerCase();
            if (command) {
                commandHistory.push(command);
                historyIndex = commandHistory.length; // Reset history index
            }

            appendCommand(command);
            inputField.value = '';

            if (command === "no-geek") {
                appendOutput("Booting into portfolio...");
            
                let percentage = 0;
                const loadingLine = document.createElement("div");
                loadingLine.textContent = "Loading... 0%";
                outputContainer.appendChild(loadingLine);
            
                const interval = setInterval(() => {
                    percentage += 10;
                    if (percentage > 100) {
                        clearInterval(interval);
                        loadingLine.textContent = "Loading... 100%";
                        setTimeout(() => {
                            appendOutput("Redirecting...");
                            setTimeout(() => {
                                window.location.href = "https://sayhan.hackclub.app";
                            }, 500);
                        }, 500);
                    } else {
                        loadingLine.textContent = `Loading... ${percentage}%`;
                    }
                }, 300); 
            
                return; 
            }
            
            if (command in routes) {
                if (command === 'home') renderHomePage();
                else if (command === 'help') renderHelp();
                else if (command === 'clear') outputContainer.innerHTML = '';
                else fetchDataAndRender(routes[command]);
            } else {
                appendOutput(`Command '${command}' not recognized. Type 'help' for a list of available commands.`);
            }
        }
    });

    document.addEventListener("keydown", (event) => {
        inputField.focus();
        
        if (event.key === 'ArrowUp') {
            if (historyIndex > 0) {
                historyIndex--;
                inputField.value = commandHistory[historyIndex];
            } else if (historyIndex === 0) {
                inputField.value = commandHistory[historyIndex];
            }
            event.preventDefault();
        }

        if (event.key === 'ArrowDown') {
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                inputField.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                inputField.value = "";
            }
            event.preventDefault();
        }
    });

    renderHomePage();
});
