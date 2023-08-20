import express from "express"
const router = express.Router()
import Note from "../model/noteModel.js"

// get all notes
router.get("/", async(req, res) => {
    try {
      const result = await Note.find()
        .then((result) => {
          console.log(result);
          res.status(200).json({ msg: result });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send({ msg: err });
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: err });
    }
})

// add new note
router.post("/addnote", async(req, res) => {
    try {
        const {note} = req.body;
        const newNote = new Note({
            note:note
        })
        const result = await newNote.save()
        .then((result) => {
            console.log(result)
           res.status(200).json({ msg: result });
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({ msg: err });
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error });
    }
})


// delete note
router.delete("/:Id", async(req, res) =>{  
try {
    await Note.findByIdAndDelete({ _id: req.params.Id })
      .then((result) => {
        console.log(res);
        res.status(200).send({ msg: result });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ msg: err });
      });
} catch (error) {
    console.log(error)
}
})


// update note
router.put("/:id", async(req, res) => {
    try {
        const note = req.body.note;
        await Note.findOneAndUpdate(
          { _id: req.params.id },
          {
            $set: {
              note:note
            }
          }
        )
          .then((result) => {
            console.log(result);
            res.status(200).send({ msg: result });
          })
          .catch((err) => {
            console.log(err);
             res.status(500).send({ msg: err });
          });
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error });
    }
})



export default router;