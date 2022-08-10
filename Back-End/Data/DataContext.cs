using System;

using Microsoft.EntityFrameworkCore;

using Back_End.Models;

namespace Back_End.Data
{
    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions<DataContext> options) : base (options) { }

        //-----------------------------------------------------------------------------------------

        public DbSet<Cliente> Cliente { get; set; }

        public DbSet<Contato> Contato { get; set; }
    
        //-----------------------------------------------------------------------------------------
    
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cliente>().Navigation(e => e.Contatos).AutoInclude();
        }

    }
}