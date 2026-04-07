// Name: Comments+
// ID: alt00001commentsplus
// Author: Alt00001
// Description: An expansion of multiple comments extensions, mainly Labels by jwklong.

// Current Version: v1.1.2
// Release Date: April 6, 2026

// changed placeholder blocks (again)
// fixes n stuff

(function(Scratch) {
    "use strict";

    const menuIconURI =
        "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwLDAsMTIwLDEyMCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4MCwtMTIwKSI+PGcgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik0yOTksMTgwYzAsMzIuNTg0NzcgLTI2LjQxNTIzLDU5IC01OSw1OWMtMzIuNTg0ODMsMCAtNTksLTI2LjQxNTIzIC01OSwtNTljMCwtMzIuNTg0OCAyNi40MTUxNywtNTkgNTksLTU5YzMyLjU4NDc3LDAgNTksMjYuNDE1MiA1OSw1OXoiIGZpbGw9IiNiNWMyOGEiIHN0cm9rZT0iIzJiMzUwZCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIvPjxwYXRoIGQ9Ik0xOTguNzUsMjE3LjVsMzIuOTc4OSwtNzVoMTIuMDIxMWwtMzIuOTc4OSw3NXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzk0ODk2MiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMzYuMjUsMjE3LjVsMzIuOTc4OSwtNzVoMTIuMDIxMWwtMzIuOTc4OSw3NXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzk0ODk2MiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvZz48L2c+PC9zdmc+";

    const currentVersion = "v1.1.2";

    const availableVersion = "https://a46r3v34ws-eng.github.io/obj/extensions/alt00001commentsplus/currentupdate.txt";

    const availableBeta = "https://a46r3v34ws-eng.github.io/obj/extensions/alt00001commentsplus/currentbeta.txt";

    class Alt00001CommentsPlus {
        getInfo() {
            return {
                id: "alt00001commentsplus",
                name: "Comments+",
                color1: "#b5c28a",
                color2: "#8aaa6a",
                color3: "#2b350d",
                menuIconURI,
                blocks: [{
                        blockType: Scratch.BlockType.LABEL,
                        text: "Update blocks!"
                    },
                    {
                        opcode: "commentsplusversion",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "current version of Comments+"
                    },
                    {
                        opcode: "commentsplusavailableversion",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "current available version of Comments+"
                    },
                    {
                        opcode: "commentsplusavailablebeta",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "current available beta of Comments+"
                    },
                    {
                        opcode: "iscommentsplusversionuptodate",
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: "is the current version of Comments+ up to date?"
                    },
                    {
                        opcode: "iscommentsplusversionastableversion",
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: "is the current version of Comments+ a stable version?",
                        color1: "#4bb6f4",
                        color2: "#1270b4",
                        color3: "#0a3d96"
                    },
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: "Comment-related blocks"
                    },
                    {
                        opcode: "cmnthat",
                        blockType: Scratch.BlockType.HAT,
                        text: "// [text]",
                        disableMonitor: false,
                        isEdgeActivated: false,
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "text"
                            }
                        }
                    },
                    {
                        opcode: "cmnthatreporter",
                        blockType: Scratch.BlockType.HAT,
                        text: "// [text] [reporter]",
                        disableMonitor: false,
                        isEdgeActivated: false,
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "text"
                            },
                            reporter: {
                                type: Scratch.ArgumentType.EMPTY,
                                deafultValue: "false"
                            }
                        }
                    },
                    {
                        opcode: "cmnthatreporteronly",
                        blockType: Scratch.BlockType.HAT,
                        text: "// [reporter]",
                        disableMonitor: false,
                        isEdgeActivated: false,
                        arguments: {
                            reporter: {
                                type: Scratch.ArgumentType.EMPTY,
                                deafultValue: "false"
                            }
                        }
                    },
                    {
                        opcode: "cmnthatboolean",
                        blockType: Scratch.BlockType.HAT,
                        text: "// [text] [boolean]",
                        disableMonitor: false,
                        isEdgeActivated: false,
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "text"
                            },
                            boolean: {
                                type: Scratch.ArgumentType.BOOLEAN,
                                deafultValue: "false"
                            }
                        }
                    },
                    {
                        opcode: "cmnthatbooleanonly",
                        blockType: Scratch.BlockType.HAT,
                        text: "// [boolean]",
                        disableMonitor: false,
                        isEdgeActivated: false,
                        arguments: {
                            boolean: {
                                type: Scratch.ArgumentType.BOOLEAN,
                                deafultValue: "false"
                            }
                        }
                    },
                    {
                        opcode: "cmntblck",
                        blockType: Scratch.BlockType.COMMAND,
                        text: "// [text]",
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "text"
                            }
                        }
                    },
                    {
                        opcode: "cmntblckreporter",
                        // hideFromPalette: true,
                        blockType: Scratch.BlockType.COMMAND,
                        text: "// [text] [reporter]",
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "text"
                            },
                            reporter: {
                                type: Scratch.ArgumentType.EMPTY
                            }
                        }
                    },
                    {
                        opcode: "cmntblckreporteronly",
                        // hideFromPalette: true,
                        blockType: Scratch.BlockType.COMMAND,
                        text: "// [reporter]",
                        arguments: {
                            reporter: {
                                type: Scratch.ArgumentType.EMPTY
                            }
                        }
                    },
                    {
                        opcode: "cmntblckboolean",
                        blockType: Scratch.BlockType.COMMAND,
                        text: "// [text] [boolean]",
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "text"
                            },
                            boolean: {
                                type: Scratch.ArgumentType.BOOLEAN,
                                defaultValue: false
                            }
                        }
                    },
                    {
                        opcode: "cmntblckbooleanonly",
                        blockType: Scratch.BlockType.COMMAND,
                        text: "// [boolean]",
                        arguments: {
                            boolean: {
                                type: Scratch.ArgumentType.BOOLEAN,
                                defaultValue: false
                            }
                        }
                    },
                    {
                        opcode: "cmntbranch",
                        blockType: Scratch.BlockType.CONDITIONAL,
                        branchCount: 1,
                        text: "// [text]",
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "text"
                            }
                        }
                    },
                    {
                        opcode: "cmntbranchreporter",
						blockType: Scratch.BlockType.CONDITIONAL,
                        text: "// [text] [reporter]",
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "text"
                            },
                            reporter: {
                                type: Scratch.ArgumentType.EMPTY,
                            }
                        }
                    },
                    {
                        opcode: "cmntbranchreporteronly",
                        blockType: Scratch.BlockType.CONDITIONAL,
                        text: "// [reporter]",
                        arguments: {
                            reporter: {
                                type: Scratch.ArgumentType.EMPTY,
                            }
                        }
                    },
                    {
                        opcode: "cmntbranchboolean",
                        blockType: Scratch.BlockType.CONDITIONAL,
                        text: "// [text] [boolean]",
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "text"
                            },
                            boolean: {
                                type: Scratch.ArgumentType.BOOLEAN,
                                defaultValue: false
                            }
                        }
                    },
                    {
                        opcode: "cmntbranchbooleanonly",
                        blockType: Scratch.BlockType.CONDITIONAL,
                        text: "// [boolean]",
                        arguments: {
                            boolean: {
                                type: Scratch.ArgumentType.BOOLEAN,
                                defaultValue: false
                            }
                        }
                    },
                    {
                        opcode: "cmntreporter",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "[value] // [label]",
                        arguments: {
                            value: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "value"
                            },
                            label: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "label"
                            }
                        }
                    },
                    {
                        opcode: "cmntreportervalue",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "[value] // [label]",
                        arguments: {
                            value: {
                                type: Scratch.ArgumentType.EMPTY
                            },
                            label: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "label"
                            }
                        }
                    },
                    {
                        opcode: "cmntboolean",
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: "[boolean] // [label]",
                        arguments: {
                            boolean: {
                                type: Scratch.ArgumentType.BOOLEAN,
                                defaultValue: false
                            },
                            label: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "label"
                            }
                        }
                    },
                    {
                        opcode: "cmntcap",
                        blockType: Scratch.BlockType.COMMAND,
                        isTerminal: true,
                        disableMonitor: true,
                        text: "// [text]",
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "text"
                            }
                        }
                    },
                    {
                        opcode: "cmntcapreporter",
                        blockType: Scratch.BlockType.COMMAND,
                        isTerminal: true,
                        disableMonitor: true,
                        text: "// [text] [reporter]",
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "text",
                            },
                            reporter: {
                                type: Scratch.ArgumentType.EMPTY,
                            }
                        }
                    },
                    {
                        opcode: "cmntcapreporteronly",
                        blockType: Scratch.BlockType.COMMAND,
                        isTerminal: true,
                        disableMonitor: true,
                        text: "// [reporter]",
                        arguments: {
                            reporter: {
                                type: Scratch.ArgumentType.EMPTY,
                            }
                        }
                    },
                    {
                        opcode: "cmntcapboolean",
                        blockType: Scratch.BlockType.COMMAND,
                        isTerminal: true,
                        disableMonitor: true,
                        text: "// [text] [boolean]",
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "text"
                            },
                            boolean: {
                                type: Scratch.ArgumentType.BOOLEAN,
                                defaultValue: false
                            }
                        }
                    },
                    {
                        opcode: "cmntcapbooleanonly",
                        blockType: Scratch.BlockType.COMMAND,
                        isTerminal: true,
                        disableMonitor: true,
                        text: "// [boolean]",
                        arguments: {
                            boolean: {
                                type: Scratch.ArgumentType.BOOLEAN,
                                defaultValue: false
                            }
                        }
                    },
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: "Placeholder blocks"
                    },
                    {
                        opcode: "plchldrblck",
                        blockType: Scratch.BlockType.COMMAND,
                        color1: "#bfbfbf",
                        color2: "#b2b2b2",
                        color3: "#555555",
                        text: ". . ."
                    },
                    {
                        opcode: "plchldrreporter",
                        blockType: Scratch.BlockType.REPORTER,
                        disableMonitor: true,
                        color1: "#bfbfbf",
                        color2: "#b2b2b2",
                        color3: "#555555",
                        text: ". . ."
                    },
                    {
                        opcode: "plchldrboolean",
                        blockType: Scratch.BlockType.BOOLEAN,
                        disableMonitor: true,
                        color1: "#bfbfbf",
                        color2: "#b2b2b2",
                        color3: "#555555",
                        text: ". . ."
                    }
                ]
            };
        }
        commentsplusversion() {
            return currentVersion;
        }
        commentsplusavailableversion() {
            return Scratch.fetch(availableVersion)
                .then((r) => r.text())
                .catch(() => "");
        }
        commentsplusavailablebeta() {
            return Scratch.fetch(availableBeta)
                .then((r) => r.text())
                .catch(() => "");
        }
        iscommentsplusversionuptodate() {
            const realCurrentVersion = JSON.stringify(currentVersion).substring(2);
            const realAvailableVersion = JSON.stringify(Scratch.fetch(availableVersion)
                .then((r) => r.text())
                .catch(() => "")).substring(2);
            return (realCurrentVersion >= realAvailableVersion);
        }
        iscommentsplusversionastableversion() {
            return ((JSON.stringify(currentVersion).substring(1, 2)) === "v");
        }
		cmnthat() {}
		cmnthatreporter() {}
		cmnthatreporteronly() {}
		cmnthatboolean() {}
		cmnthatbooleanonly() {}
		cmntblck() {}
        cmntblckreporter(args) {
            return args.reporter;
        }
        cmntblckreporteronly(args) {
            return args.reporter;
        }
        cmntblckboolean(args) {
            return args.boolean;
        }
        cmntblckbooleanonly(args) {
            return args.boolean;
        }
        cmntbranch() {
			return;
		}
        cmntbranchreporter() {
			return;
		}
        cmntbranchreporteronly() {
			return;
		}
        cmntbranchboolean() {
			return;
		}
        cmntbranchbooleanonly() {
			return;
		}
        cmntreporter(args) {
            return args.value;
        }
        cmntreportervalue(args) {
            return args.value;
        }
        cmntboolean(args) {
            return args.boolean;
        }
        cmntcap() {}
        cmntcapreporter(args) {
            return args.reporter;
        }
        cmntcapreporteronly(args) {
            return args.reporter;
        }
        cmntcapboolean(args) {
            return args.boolean;
        }
        cmntcapbooleanonly(args) {
            return args.boolean;
        }
        plchldrblck() {
            return;
        }
        plchldrreporter() {
            return "";
        }
        plchldrboolean() {
            return false;
        }
    }
    Scratch.extensions.register(new Alt00001CommentsPlus());
})(Scratch);