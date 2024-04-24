<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'category_id' => 'required|exists:categories,id',
            'amount' => 'required|numeric',
            'type' => 'required|in:expense,income',
            'description' => 'nullable|string',
            'date' => 'required|date',
        ]);

        // Create a new transaction
        $transaction = Transaction::create($validatedData);

        // Return the created transaction as JSON response
        return response()->json(['transaction' => $transaction], 201);
    }
}
