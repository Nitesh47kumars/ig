import ImageKit from "@imagekit/nodejs"

const imageKit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

export async function uploadFile(buffer){
    const result = await imageKit.files.upload({
        file: buffer.toString("base64"),
        fileName: "post"
    });

    return result
}