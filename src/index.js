const qfingerprint = {
	"calculate": () => {
		return new Promise((resolve, reject) => {
			// Create canvas

			const c = document.createElement("canvas")

			c.width = 200
			c.height = 200

			// Initialize WebGL

			const ctx = c.getContext("webgl")

			ctx.viewport(0, 0, ctx.drawingBufferWidth, ctx.drawingBufferHeight)

			// Draw to canvas

			ctx.clearColor(0.9, 0.6, 0.7, 0.6)
			ctx.clear(ctx.COLOR_BUFFER_BIT)

			// Encode text to UInt8Array with TextEncoder

			const te = new TextEncoder()

			// Encode unique portion of image
			const encText = te.encode(c.toDataURL().substring(0, 69))

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
