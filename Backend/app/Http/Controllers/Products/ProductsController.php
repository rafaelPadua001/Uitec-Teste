<?php

namespace App\Http\Controllers\Products;

use App\Models\Product;
use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;


class ProductsController extends Controller
{
    //
    public function index(){
      
        try{
            $products = Product::orderBy('id', 'desc')->get();
            return response()->json($products);

        }
        catch(Exception $e){
            return response()->json($e->getMessage(), 500);
        }
    }
    public function create(Request $request){
        try{
            $product = Product::create($request->all());
            return response()->json($product);
        }
        catch(Exception $e){
            return response()->json($e->getMessage(), 500);
        }
        return response()->json($request);
        
    }
    public function update(Request $request, $id){
 
        try{
            $product = Product::where('id', $id)->update($request->all());
            return response()->json($product);
        }
        catch(Exception $e){
            return response()->json($e);
        }
    }
    public function destroy($id){
        try{
            $product = Product::where('id', $id)->delete();
            return response()->json($product);
        }
        catch(Exception $e){
            return response()->json($e->getMessage(), 500);
        }
    }
}
