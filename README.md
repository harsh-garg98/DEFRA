<h3>Data Used</h3>

The datasets used in the python script are sourced from: 
https://naturalengland-defra.opendata.arcgis.com/search?collection=Dataset

<ol>
    <li>National Parks (England)</li>
    <li>Ramsar Sites (England)</li>
    <li>Sites of Special Scientific Interest (England)</li>
</ol>

<h3>Shell Script</h3>

The shell script 'lazygit' is used to push changes to the git repository in one line instead of 3. Since the data folder is bigger than the allowed 50MB, the script ignores the folder and pushes everything else. It should be invoked as follows:
```bash lazygit.sh "insert some message"```