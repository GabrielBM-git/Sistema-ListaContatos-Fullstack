using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.Data;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Back_End.Models
{
    public class Cliente
    {
        
        [Key]
        public int Id { get; set; }

        //-----------------------------------------------------------------------------------------
        
        [Required]
        [StringLength(200)]
        public string Nome { get; set; }

        [StringLength(100)]
        public string Grupo { get; set; }

        //-----------------------------------------------------------------------------------------

        public virtual IList<Contato> Contatos { get; set; }

    }
}