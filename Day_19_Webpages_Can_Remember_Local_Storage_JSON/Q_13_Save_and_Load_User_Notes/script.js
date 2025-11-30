const notesBox = document.getElementById("notesBox");
    const STORAGE_KEY = "userNotes";

    //  Load notes automatically when page loads
    window.onload = function () {
        const savedNotes = localStorage.getItem(STORAGE_KEY);
        if (savedNotes) {
            notesBox.value = savedNotes;
        }
    };

    //  Save Notes with Validation
    function saveNotes() {
        const notes = notesBox.value.trim();

        if (notes === "") {
            alert("Cannot save empty notes!");
            return;
        }

        localStorage.setItem(STORAGE_KEY, notes);
        alert("Notes saved successfully!");
    }

    //  Load Notes
    function loadNotes() {
        const savedNotes = localStorage.getItem(STORAGE_KEY);

        if (savedNotes) {
            notesBox.value = savedNotes;
            alert("Notes loaded!");
        } else {
            alert("No notes found!");
        }
    }

    //  Clear Notes
    function clearNotes() {
        localStorage.removeItem(STORAGE_KEY);
        notesBox.value = "";
        alert("Notes cleared!");
    }