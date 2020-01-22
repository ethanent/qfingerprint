const qfingerprint = {
	"calculate": () => {
		return new Promise((resolve, reject) => {
			// Create virtual canvas

			const c = document.createElement("canvas")

			c.style.display = "none"
			c.width = 200
			c.height = 200

			const ctx = c.getContext("2d")

			// Draw to canvas

			const renderText = "Metrafin Group"

			ctx.textBaseline = "top"

			ctx.font = "14px Arial"

			ctx.textBaseline = "alphabetic"
			ctx.fillStyle = "#F60"

			ctx.fillRect(50, 50, 50, 50)

			ctx.fillStyle = "#069"

			ctx.fillText(renderText, 50, 50)

			ctx.fillStyle = "rgba(96, 234, 0, 0.7)"

			ctx.fillText(renderText, 55, 55)

			const raw = c.toDataURL()

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
