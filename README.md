# qfingerprint
Canvas fingerprinting frontend JS library

## Usage

```html
<script src="../path/to/qfingerprint/src/index.js"></script>
```

```js
qfingerprint.calculate()
    .then((res) => {
        // Handle response
        console.log(res)

        // => "24001741af7f3a01e419fc1a98a0c4ee23b28f0d4c4611a385f99b89c9dab7c7"
        // A SHA256 hexadecimal string
    })
    .catch((err) => {
        // Handle error
        console.error(err)
    })
```

## Acknowledgements

A thank you to [BrowserLeaks](https://browserleaks.com/canvas) for documenting its methods.
