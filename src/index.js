const qfingerprint = {
	"calculate": () => {
		return new Promise((resolve, reject) => {
			// Create virtual canvas

			const c = document.createElement("canvas")

			c.style.display = "none"
			c.width = 200
			c.height = 200

			const ctx = c.getContext("webgl")

			ctx.viewport(0, 0, 200, 100)

			// Draw to canvas

			ctx.clearColor(0.9, 0.6, 0.7, 0.6)

			// Encode text to UInt8Array with TextEncoder

			const te = new TextEncoder()

			const encText = te.encode(c.toDataURL())

			// Digest encoded text

			crypto.subtle.digest("SHA-256", encText)
				.then((ab) => {
					const tr = Array.from(new Uint8Array(ab))

					resolve(tr.map((b) => b.toString(16).padStart(2, "0")).join(""))
				})
				.catch((err) => {
					reject(err)
				})
		})

	}
}
