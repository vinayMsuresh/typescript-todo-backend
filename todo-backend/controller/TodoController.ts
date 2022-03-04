import { Request, Response, NextFunction } from "express";
import { TodoModel } from "../db/Todo";
const addTodo = async(req:Request, res:Response) => {
    let data = req.body;
    const ins = new TodoModel(data);
    await ins.save();
    return res.status(200).json({msg: "Data added successfully"})
}

const getTodo = async(req:Request, res:Response) => {
    const todoData = await TodoModel.find({});
    console.log(todoData);
    return res.json({todo:todoData});
}

const deleteTodo = async(req:Request, res:Response) => {
    let {id} = req.params;
    await TodoModel.deleteOne({_id:id});
    return res.json({'msg':"Deleted successfully"});
}

const updateTodo = async(req:Request, res:Response) => {
    let{_id, title, description} = req.body;
    await TodoModel.updateOne({_id:_id}, {$set:{title:title, description:description}})
    return res.json({'msg': "Updated successfully"});
}

export default {addTodo, getTodo, deleteTodo, updateTodo};