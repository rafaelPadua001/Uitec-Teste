<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'nome_do_produto',
        'valor_do_produto',
        'data_de_vencimento',
        'quantidade_em_estoque',
        'produto_perecivel'
    ];
}
