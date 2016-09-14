# swagger-spec-to-pdf

[![npm](https://img.shields.io/npm/v/npm.svg?maxAge=2592000)]() [![npm](https://img.shields.io/npm/dm/localeval.svg?maxAge=2592000)]() [![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)]()

### Usage:
    usage: swagger2pdf [-h] [-v] [-s SRC] [-o OUTPUT]

    Optional arguments:
      -h, --help            Show this help message and exit.
      -v, --version         Show program's version number and exit.
      -s SRC, --src SRC     Swagger spec JSON file.
      -o OUTPUT, --output OUTPUT
                            Output path of the pdf file.

### Exec:
./bin/swagger2pdf -s ./swagger-spec-sample.json -o ./dump/

### Sample:
See: ./dump/swagger-spec-sample.pdf

### Appendix:
#### Working Theory
1. Read source swagger json spec
2. Convert it into yaml format
3. Dump yaml into the spec dir of swagger editor
4. Use electron to render swagger editor page (nicely formatted api page)
5. Dump the page into pdf

#### Swagger Editor
Version of swagger editor embedded is: 2.9.9   
You can get it from: [here](https://github.com/swagger-api/swagger-editor)   
If you want to use some other version:

* clone the repo
* replace the editor in ./swagger-editor
* Add codes below into the bottom of file ***swagger-editor/index.html***
* npm install .

```javascript
<script type="text/javascript">
    $("document").ready(function() {
        setTimeout(function() {
            var fileMenuTimer = setInterval(function() {
                // open file menu
                var fileMenu = $("#fileMenu");
                if (fileMenu.length) {
                    clearInterval(fileMenuTimer);
                    fileMenu.click();

                    // open example selector
                    var exampleButton = $("#open-example");
                    var exampleButtonTimer = setInterval(function() {
                        if (exampleButton.length) {
                            clearInterval(exampleButtonTimer);
                            exampleButton.click();

                            // click open button
                            setTimeout(function() {
                                $(".modal-large .btn-primary").click();
                            }, 1000);
                        }
                    }, 300);
                }
            }, 300);
        }, 1000);
    });
</script>
```

Done, just use it.