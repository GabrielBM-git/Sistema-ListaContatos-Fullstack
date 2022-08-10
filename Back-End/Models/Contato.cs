using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.Data;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Back_End.Models
{
    public class Contato
    {
        
        [Key]
        public int Id { get; set; }

        //-----------------------------------------------------------------------------------------
        
        [Required]
        [StringLength(200)]
        public string Nome { get; set; }
        
        [StringLength(200)]
        public string Email { get; set; }
        
        [StringLength(100)]
        public string Telefone { get; set; }
        
        [StringLength(100)]
        public string WhatsApp { get; set; }

        //-----------------------------------------------------------------------------------------
        
        public int ClienteId { get; set; }

    }
}