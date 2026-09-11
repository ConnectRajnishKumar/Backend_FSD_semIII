import fs from "fs/promises";

const fileName = "student.txt";

async function createFile() {
    try {
        await fs.writeFile(
            fileName,
            "Name: Rajnish\nCourse: B.Tech CSE",
            "utf8"
        );

        console.log("File created successfully");
    } catch (error) {
        console.log("Error:", error.message);
    }
}

async function readFile() {
    try {
        const data = await fs.readFile(fileName, "utf8");

        console.log("\nFile Content:");
        console.log(data);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

async function updateFile() {
    try {
        await fs.appendFile(
            fileName,
            "\nCollege: ABES Engineering College",
            "utf8"
        );

        console.log("\nFile updated successfully");
    } catch (error) {
        console.log("Error:", error.message);
    }
}

async function deleteFile() {
    try {
        await fs.unlink(fileName);

        console.log("\nFile deleted successfully");
    } catch (error) {
        console.log("Error:", error.message);
    }
}

async function main() {
    await createFile();
    await readFile();
    await updateFile();
    await readFile();
    await deleteFile();
}

main();